import { Platforms, Company } from './platforms.model';

export interface Api {
  category: string;
  slug: string;
  tags: Array<string>;
  channels: Array<{
    name: string;
    url: string;
    slug: string;
    description: string;
    company: Company;
  }>;
}

export interface Channel {
  name: string;
  url: string;
  slug: string;
  description: string;
  company: Company;
}

export const ApiList: Array<Api> = [
  {
    category: 'Analytics',
    slug: 'analytics',
    tags: [],
    channels: [
      {
        name: 'Google Analytics',
        url: 'https://developers.google.com/analytics/',
        slug: 'google-analytics',
        description: 'Google Analytics lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications',
        company: Platforms.google
      },
      {
        name: 'Google Tag Manager',
        url: 'google-tag-manager',
        slug: 'google-tag-manager',
        description: 'A tag management system created by Google to manage JavaScript and HTML tags used for tracking and analytics on websites',
        company: Platforms.google
      },
      {
        name: 'Admin Reports',
        url: 'https://developers.google.com/admin-sdk/reports/',
        slug: 'google-admin-reports',
        description: 'The one-minute experience: APIs Explorer',
        company: Platforms.google,
      },
      {
        name: 'Cloud Vision',
        url: 'https://cloud.google.com/vision/',
        slug: 'google-cloud-vision',
        description: 'Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications',
        company: Platforms.google,
      },
      {
        name: 'YouTube Analytics and Reporting',
        url: 'https://developers.google.com/youtube/analytics',
        slug: 'youtube-reporting',
        description: 'The YouTube Reporting and YouTube Analytics APIs let you retrieve YouTube Analytics data to automate complex reporting tasks, build custom dashboards, and much more',
        company: Platforms.youtube
      },
      // {
      //   name: 'Wealthport API',
      //   url: 'wealthport',
      //   slug: 'wealthport-api',
      //   description: '',
      //   company: Platforms.wealthport
      // },
      {
        name: 'Botify',
        url: 'https://developers.botify.com/',
        slug: 'botify',
        description: 'SEO stakeholders the data, tools, and diagnostics necessary to create and maintain high quality digital assets for search engines and voice assistants',
        company: Platforms.botify,
      },
      {
        name: 'Football Prediction',
        url: 'https://boggio-analytics.com/fp-api/',
        slug: 'football-prediction',
        description: 'The Football Prediction API allows developers to get predictions for upcoming football (soccer) matches, results for past matches, and performance monitoring for statistical models',
        company: Platforms.botify,
      },
    ]
  },
  {
    category: 'Backend',
    slug: 'backend',
    tags: [],
    channels: [
      {
        name: 'Cloud Firestore',
        url: 'https://cloud.google.com/firestore',
        slug: 'google-cloud-firestore',
        description: 'Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development',
        company: Platforms.google
      },
      {
        name: 'Cloud Spanner',
        url: 'https://cloud.google.com/spanner/',
        slug: 'google-cloud-spanner',
        description: 'Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service',
        company: Platforms.google
      },
      {
        name: 'Cloud OS Login',
        url: 'https://cloud.google.com/compute/docs/oslogin/',
        slug: 'google-cloud-oslogin',
        description: 'Manages OS login configuration for Google account users',
        company: Platforms.google
      },
      {
        name: 'Google Cloud SQL Admin',
        url: 'https://cloud.google.com/sql/docs/reference/latest',
        slug: 'google-cloud-sql',
        description: 'Creates and manages Cloud SQL instances, which provide fully managed MySQL or PostgreSQL databases',
        company: Platforms.google
      },
      {
        name: 'Google Task Queue',
        url: 'https://developers.google.com/appengine/docs/python/taskqueue/rest',
        slug: 'google-task-queue',
        description: 'Accesses a Google App Engine Pull Task Queue over REST',
        company: Platforms.google
      },
      {
        name: 'Firebase Remote confg',
        url: 'https://firebase.google.com/docs/remote-config/',
        slug: 'firebase-remote-config',
        description: 'Firebase Remote Config API allows the 3P clients to manage Remote Config conditions and parameters for Firebase applications.Accesses a Google App Engine Pull Task Queue over REST',
        company: Platforms.google
      },
      {
        name: 'Firebase Dynamic Links',
        url: 'https://firebase.google.com/docs/dynamic-links/',
        slug: 'firebase-dynamic-link',
        description: 'Programmatically creates and manages Firebase Dynamic Links',
        company: Platforms.google
      },
      {
        name: 'Integrations for Firebase Rules',
        url: 'https://firebase.google.com/docs/storage/security',
        slug: 'integration-firebase-rules',
        description: 'Firebase Security Rules for Cloud Storage',
        company: Platforms.google
      },
      {
        name: 'Google Compute Engine Instance Groups',
        url: 'https://developers.google.com/compute/',
        slug: 'integration-firebase-rules',
        description: 'Google Compute Engine instances',
        company: Platforms.google
      },
    ]
  },
  {
    category: 'Cloud',
    slug: 'cloud',
    tags: [],
    channels: [
      {
        name: 'Google Sheets',
        url: 'https://developers.google.com/sheets/',
        slug: 'google-sheets',
        description: 'Reads and writes Google Sheets',
        company: Platforms.google
      },
      {
        name: 'Google App Script',
        url: 'https://developers.google.com/apps-script/api/',
        slug: 'google-app-script',
        description: 'Google Apps Script projects.',
        company: Platforms.google
      },
      {
        name: 'Google Service Control',
        url: 'https://cloud.google.com/service-control/',
        slug: 'google-service-control',
        description: 'Provides control plane functionality to managed services, such as logging, monitoring, and status checks.',
        company: Platforms.google
      },
      {
        name: 'Amazon Pinpoint',
        url: 'https://docs.aws.amazon.com/pinpoint/',
        slug: 'amazon-pinpoint',
        description: '',
        company: Platforms.amazon
      },
      {
        name: 'Amazon Lambda',
        url: 'https://docs.aws.amazon.com/lambda/',
        slug: 'amazon-lambda',
        description: 'AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second.',
        company: Platforms.amazon
      },
      {
        name: 'Microsoft SQL Management Client',
        url: ' https://management.azure.com/',
        slug: 'microsoft-sql-management-client',
        description: 'The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.',
        company: Platforms.microsoft
      },
    ]
  },
  {
    category: 'Collaboration',
    slug: 'collaboration',
    tags: [],
    channels: [
      {
        name: 'Slack',
        url: 'https://api.slack.com/web',
        slug: 'slack',
        description: 'One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.',
        company: Platforms.slack
      },
      {
        name: 'Bitbucket',
        url: 'https://bitbucket.org/api',
        slug: 'bitbucket',
        description: 'Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.',
        company: Platforms.bitbucket
      },
      {
        name: 'Github',
        url: 'https://developer.github.com/v3/',
        slug: 'github',
        description: 'Powerful collaboration, code review, and code management for open source and private projects.',
        company: Platforms.github
      },
      {
        name: 'Trello',
        url: 'https://developers.trello.com',
        slug: 'trello',
        description: '',
        company: Platforms.atlassian
      },
      {
        name: 'Flat',
        url: 'https://flat.io/developers/docs/api/',
        slug: 'flat',
        description: 'Write your music scores online. With the easiest tool for creating sheet music together.',
        company: Platforms.flat
      },
      {
        name: 'Stack Exchange',
        url: 'https://api.stackexchange.com/',
        slug: 'stackexchange',
        description: 'Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.',
        company: Platforms.stackoverflow
      },
      {
        name: 'Avaza',
        url: 'https://api.avaza.com/',
        slug: 'avaza',
        description: 'Beautiful all-in-one software to run your business',
        company: Platforms.avaza
      },
    ]
  },
];