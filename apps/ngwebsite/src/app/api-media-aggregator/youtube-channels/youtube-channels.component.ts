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

  @ViewChild('addProductsModal') addProductsModal;
  
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
    
    const self = this;
    this.route.paramMap.subscribe(params => {
      self.channelId = params.get('id');

      // Check if the ID is inside the list before calling the service
      if (self.channelId && !self.service.isValidChannelId(self.channelId) ) {
        self.apiError = 'Unvalid YouTube Channel ID. The selected channel ID is not on the list or it was impossibile to recover the related videos.';
      } else if (self.channelId) {
        // TODO: check API key
        this.service.searchVideosByChannelId(self.channelId)
          .subscribe(
            (data: any) => {
              self.apiResult = data;
            },
            error => {
              self.apiError = error.message;
            },
            () => { self.requestSent = true; }
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
    const regex = new RegExp(/\/vi\/(.*)\//);
    return url.match(regex)[1];
  }
  
  onHideModal(modalRef: BsModalRef) {
    modalRef.hide();
  }
}
