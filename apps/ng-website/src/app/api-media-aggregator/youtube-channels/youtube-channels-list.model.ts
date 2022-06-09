import { SafeResourceUrl } from '@angular/platform-browser';

export const YoutubeGroupsList: YoutubeGroupsProps[] = [
  {
    image: 'frontend.gif',
    label: 'Frontend',
    slug: 'frontend',
    label_menu: 'Frontend',
    channels: [
      {
        title: 'ReactCasts',
        slug: 'react-casts',
        username: 'ReactCasts', // unofficial
        id: 'UCZkjWyyLvzWeoVWEpRemrDQ',
      },
      {
        title: 'Fireship',
        slug: 'fireship',
        username: 'fireship',
        id: 'UCsBjURrPoezykLs9EqgamOA',
      },
      {
        title: 'Programming with Mosh',
        slug: 'mosh-programming',
        username: 'programmingwithmosh',
        id: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
      },
    ]
  },
  {
    image: 'angular.gif',
    label: 'Angular',
    slug: 'angular',
    label_menu: 'Angular',
    channels: [
      {
        title: 'Angular',
        slug: 'angular',
        username: 'angularjs',
        id: 'UCbn1OgGei-DV7aSRo_HaAiw',
      },
      {
        title: 'Angular University',
        slug: 'angular-university',
        username: 'angular-university', // unofficial
        id: 'UC3cEGKhg3OERn-ihVsJcb7A',
      },
    ]
  },
];

export class VideoProps {
  id: string;
  title: SafeResourceUrl;
  embed_url?: SafeResourceUrl;

  constructor() {} // Avoid error on creating an instance
}

export interface YoutubeGroupsProps {
  image: string;
  label: string;
  slug: string;
  label_menu: string;
  channels: Array<{
    title: string;
    slug: string;
    username: string;
    id: string;
  }>;
}

interface YoutubeVideoSnippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    url: string;
    width: number;
    heigth: number;
  };
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface YoutubeChannel {
  kind: string;
  etag: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<{
    kind: string;
    etag: string;
    id: {
      kind: string;
      videoId: string;
    };
    snippet: YoutubeVideoSnippet;
  }>;
}