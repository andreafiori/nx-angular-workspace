import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlickrComponent } from './flickr/flickr.component';
import { YoutubeChannelsComponent } from './youtube-channels/youtube-channels.component';
import { ApiListComponent } from './api-list/api-list.component';

import { YoutubeService } from './youtube-channels/youtube.service';
import { FlickrService } from './flickr/flickr.service';

import { ChannelFilterPipe } from '../shared/pipes/channel-filter.pipe';
import { SafeUrlPipe } from '../shared/pipes/safe-url.pipe';
import { NewsComponent } from './news/news.component';
import { RssParserService } from './news/rss-parser.service';

const routes: Routes = [
  {
    path: 'api-media-aggregator',
    children: [
      { path: 'youtube', component: YoutubeChannelsComponent },
      { path: 'youtube/channel/:id', component: YoutubeChannelsComponent },
      { path: 'flickr', component: FlickrComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:group/:slug', component: NewsComponent },
      { path: 'list', component: ApiListComponent },
    ]
  }
];

@NgModule({
  declarations: [
    YoutubeChannelsComponent,
    FlickrComponent,
    ApiListComponent,
    NewsComponent,
    // Pipes
    ChannelFilterPipe,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    FlickrService,
    YoutubeService,
    RssParserService
  ]
})
export class ApiMediaAggregatorModule { }
