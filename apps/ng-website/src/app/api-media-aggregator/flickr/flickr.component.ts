import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlickrService } from './flickr.service';
import { ApiRecordset } from './photoset.model';

@Component({
  selector: 'nx-workspace-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss'],
})
export class FlickrComponent implements OnInit {

  formSearch: FormGroup;

  requestSent = false;
  apiResult: ApiRecordset;
  apiError: string;
  apiErrorFirstCheck: string;

  constructor(fb: FormBuilder, private service: FlickrService) {
    this.formSearch = fb.group({
      'search': [null, [Validators.required]],
    });
  }

  ngOnInit() {
    if (this.service.apiKey === '') {
      this.apiErrorFirstCheck = 'Empty API key';
    }
  }

  // TODO check GET call for results and HTTP errors
  onSubmit(value: any): any {
    if (typeof value.search === 'undefined') {
      return false;
    }

    this.requestSent = true;

    this.service.searchPhotos(value.search)
      .subscribe(
        (data: any) => {
          this.apiResult = data.photos;
        },
        error => {
          this.apiError = error;
        },
        () => { this.requestSent = true; }
      );

    return this.apiResult;
  }

  /**
   * Reset search form and results
   */
  onReset() {
    // this.apiResult = null;

    this.apiError = '';
    this.apiError = '';
  }

}
