import { Injectable } from '@angular/core';
import { Feeds } from './Feeds.interface';

@Injectable()
export class FeedsList {

  feeds: Array<Feeds> = [
    {
      image: 'angular-news.gif',
      title: 'Angular News',
      description: '',
      group: 'angular',
      category: 'Frontend',
      feeds: [
        {
          label: 'Angular in Depth',
          description: 'Latest articles on Angular in Depth',
          slug: 'angular-in-depth',
          url: 'https://blog.angularindepth.com/feed'
        },
      ]
    },
    {
      image: 'frontend-news.gif',
      title: 'Frontend News',
      description: 'Latest Frontend news: HTML5, CSS3, Javascript language and frameworks',
      group: 'frontend',
      category: 'Frontend',
      feeds: [
        {
          label: 'Smashing Magazine',
          description: 'Smashing Magazine - For Professional Web Designers and Developers',
          slug: 'smashing-magazine',
          url: 'https://www.smashingmagazine.com/feed'
        },
        {
          label: 'Sitepoint',
          description: 'Sitepoint',
          slug: 'sitepoint',
          url: 'https://www.sitepoint.com/feed'
        },
        {
          label: 'Codrops',
          description: 'Codrops | Useful resources and inspiration for creative minds',
          slug: 'codrops',
          url: 'http://tympanus.net/codrops/feed/'
        },
        {
          label: 'A list apart',
          description: 'A List Apart: For People Who Make Websites',
          slug: 'a-list-apart',
          truncateDescription: true,
          url: 'https://alistapart.com/main/feed'
        },
        // {
        //   label: 'A list apart, translated articles',
        //   description: 'A List Apart: For People Who Make Websites (translated articles)',
        //   slug: 'a-list-apart-translated-articles',
        //   url: 'https://alistapart.com/main/feed-translations'
        // },
        {
          label: 'Speckyboy',
          description: 'Speckyboy Design Magazine - Web Design News, Resources & Inspiration',
          slug: 'speckyboy',
          url: 'https://speckyboy.com/feed'
        },
        {
          label: 'Webdesigner Depot',
          description: 'Webdesigner Depot - Web Design Blog',
          slug: 'webdesigner-depot',
          url: 'http://www.webdesignerdepot.com/feed/'
        },
        {
          label: 'Coding Horror',
          description: 'Latest articles on Coding Horror',
          slug: 'coding-horror',
          url: 'https://blog.codinghorror.com/feed'
        },
        {
          label: 'CSS Tricks',
          description: 'Latest articles on CSS Tricks',
          slug: 'css-tricks',
          url: 'https://css-tricks.com/feed'
        },
        {
          label: 'Tutsplus',
          description: 'Latest articles on Tutsplus',
          slug: 'tutsplus',
          url: 'https://css-tricks.com/feed'
        },
        {
          label: 'Mosh Hamedani',
          description: 'Mosh Hamedani - programmingwithmosh.com',
          slug: 'mosh-hamedani',
          url: 'https://programmingwithmosh.com/feed'
        },
      ]
    }
  ];

}