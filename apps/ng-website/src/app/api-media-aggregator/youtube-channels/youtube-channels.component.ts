import { Component, OnInit, TemplateRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { YoutubeService } from './youtube.service';
import { VideoProps, YoutubeChannel, YoutubeGroupsProps, YoutubeGroupsList } from './youtube-channels-list.model';

@Component({
  selector: 'nxprojects-youtube-channels',
  templateUrl: './youtube-channels.component.html',
  styleUrls: [],
  providers: [
    BsModalService
  ],
  encapsulation: ViewEncapsulation.None
})
export class YoutubeChannelsComponent implements OnInit {

  @ViewChild('addProductsModal') addProductsModal = null;

  href: string;

  requestSent = false;
  apiResult: YoutubeChannel;
  apiError: string;

  channels: Array<YoutubeGroupsProps>;
  channelId: string;

  /**
   * Video to play in a modal window
   */
  videoProps = new VideoProps();

  modalRef: BsModalRef;

  constructor(
    private service: YoutubeService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private _sanitizer: DomSanitizer) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.href = this.router.url;

    // Set channel list
    this.channels = YoutubeGroupsList;

    this.route.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      if (idFromParams) {
        this.channelId = idFromParams;
      }

      // Check if the ID is inside the list before calling the service
      if (this.channelId && !this.service.isValidChannelId(this.channelId) ) {
        this.apiError = 'Unvalid YouTube Channel ID. The selected channel ID is not on the list or it was impossibile to recover the related videos.';
      } else if (this.channelId) {
        // TODO: check API key
        this.service.searchVideosByChannelId(this.channelId)
          .subscribe(
            (data: any) => {
              this.apiResult = data;
            },
            error => {
              this.apiError = error.message;
            },
            () => { this.requestSent = true; }
          );
        }
    });
  }

  async openModal(template: TemplateRef<any>, videoProps: VideoProps) {
    this.videoProps.title = this._sanitizer.bypassSecurityTrustHtml(videoProps.title as string);
    this.videoProps.embed_url = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.getVideoIdFromThumbUrl(videoProps.id)
    );
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  getVideoIdFromThumbUrl(url: string): string {
    const regex = /\/vi\/(.*)\//;
    const match: RegExpExecArray | null = regex.exec(url);
    return (match != null) ? match[1] : '';
  }

  onHideModal(modalRef: BsModalRef) {
    modalRef.hide();
  }
}
