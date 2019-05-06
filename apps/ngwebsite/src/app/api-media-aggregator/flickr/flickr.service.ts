import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class FlickrService {

  apiKey = environment.flickr_api_key;

  result: any;
  error: string;

  constructor(private http: HttpClient) { }

  /**
   * Flickr API: https://www.flickr.com/services/api/
   * 
   * @param search string
   * @returns any
   */
  searchPhotos(search: string): Observable<Object> {
    let params = new HttpParams();

    params = params.append('method', 'flickr.photos.search');
    params = params.append('api_key', environment.flickr_api_key);
    params = params.append('photoset_id', '72157641825659515');
    params = params.append('extras', 'url_q,+url_z,url_l,tags');
    params = params.append('format', 'json');
    params = params.append('nojsoncallback', '1');
    params = params.append('tags', search);

    return this.http.get('https://api.flickr.com/services/rest/', { params: params });
  }

}