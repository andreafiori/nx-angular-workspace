import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlickrService } from './flickr.service';

@Component({
  selector: 'nxprojects-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss'],
})
export class FlickrComponent implements OnInit {

  formSearch: FormGroup;

  requestSent = false;
  apiResult: any;
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

    const self = this;
    this.service.searchPhotos(value.search)
      .subscribe(
        (data: any) => {
          self.apiResult = data.photos;
        },
        error => {
          self.apiError = error;
        },
        () => { self.requestSent = true; }
      );
      
    return self.apiResult;
  }

  /**
   * Reset search form and results
   */
  onReset() {
    this.apiError = null;
    this.apiResult = null;
    this.apiError = null;
  }

}