import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeGroupsList } from './youtube-channels-list.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey = environment.youtube_api_key;

  constructor(private http: HttpClient) { }

  isValidChannelId(channelId: string): boolean {
    if (channelId === null || typeof channelId === 'undefined') {
      return false;
    }

    for(let i=0; i < YoutubeGroupsList.length; i++) {
      const channelWasFound = YoutubeGroupsList[i]['channels'].find(x => x.id === channelId);
      if (typeof channelWasFound === undefined) {
        return false;
      }
    }
  
    return true;
  }

  searchVideosByChannelId(channelId: string): Observable<Object> {
    let params = new HttpParams();

    params = params.append('order', 'date');
    params = params.append('part', 'snippet');
    params = params.append('maxResults', '24');
    params = params.append('key', this.apiKey);
    params = params.append('channelId', channelId);

    return this.http.get('https://www.googleapis.com/youtube/v3/search', { params: params });
  }
}
