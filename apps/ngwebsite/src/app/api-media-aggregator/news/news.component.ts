import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { RssParserService } from './rss-parser.service';
import { FeedsList } from '../../shared/models/feeds/FeedsList';
import { Feeds } from '../../shared/models/feeds/Feeds.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: []
})
export class NewsComponent implements OnInit {

  currentFeed: any;

  error: any;

  sub: any;

  feeds: Array<Feeds>;

  group: string;
  slug: string;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private rssParser: RssParserService) {

  }

  ngOnInit() {

    // const parser = this.rssParser;
    this.http.get('/angular-in-depth', { responseType: 'text' })
      .subscribe(response => {

        // const xmlDoc = parser.parseRssXmlString(response);

        return response;
      },
        error => {
          console.log(error);
        }
      );

    const feedsList = new FeedsList();
    this.feeds = feedsList.feeds; // Assign generic list

    // Search category and related feeds
    this.route.paramMap.subscribe(paramMap => {

      // GET paramaters
      // this.group = this.route.snapshot.paramMap.get('group');
      // this.slug = this.route.snapshot.paramMap.get('slug');

      this.group = paramMap.get('group');
      this.slug = paramMap.get('slug');

      if (!!this.group && !!this.slug) {

        // Search group and feed slug
        for (let i = 0; i < feedsList.feeds.length; i++) {
          const feeds = feedsList.feeds[i]['feeds'];

          if (feedsList.feeds[i]['group'] === this.group) {

            for (let j = 0; j < feeds.length; j++) {
              if (feeds[j]['slug'] === this.slug) {
                // REST call feed
                const rssParser = this.rssParser;
                const self = this;
                this.http.get(feeds[j]['url'], { responseType: 'text' })
                  .subscribe(response => {

                    self.currentFeed = rssParser.parseRssXmlString(response);

                    return response;
                  },
                    error => {
                      console.log(error);
                      self.error = error;
                    }
                  );

              }
            }

          }

        }

      } else {
        this.resetCurrentFeed();
      }

    });
  }

  resetCurrentFeed() {
    this.currentFeed = null;
  }

}
