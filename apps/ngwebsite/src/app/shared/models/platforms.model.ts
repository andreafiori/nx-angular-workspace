export interface Company {
  name: string;
  slug: string;
  url: string;
  description: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface PlatformType<Company> {
  [key: string]: Company;
}

export const Platforms: PlatformType<Company> = {
  google: {
    name: 'Google',
    slug: 'google',
    url: 'http://www.google.com',
    description: ''
  },
  youtube: {
    name: 'YouTube',
    slug: 'youtube',
    url: 'http://www.youtube.com',
    description: ''
  },
  microsoft: {
    name: 'Microsoft',
    slug: 'microsoft',
    url: 'http://www.microsoft.com',
    description: ''
  },
  amazon: {
    name: 'Amazon',
    slug: 'amazon',
    url: 'http://www.amazon.com',
    description: ''
  },
  // facebook: {
  //   name: 'Facebook',
  //   slug: 'facebook',
  //   url: 'http://www.facebook.com',
  //   description: ''
  // },
  // wealthport: {
  //   name: 'Wealthport',
  //   slug: 'wealthport',
  //   url: 'https://www.wealthport.co.za/',
  //   description: ''
  // },
  // rottentomatoes: {
  //   name: 'Rotten Tomatoes',
  //   slug: 'rotten-tomatoes',
  //   url: 'http://www.rottentomatoes.com',
  //   description: ''
  // },
  botify: {
    name: 'Botify',
    slug: 'botify',
    url: 'https://www.botify.com/',
    description: ''
  },
  slack: {
    name: 'Slack',
    slug: 'slack',
    url: 'https://www.slack.com/',
    description: ''
  },
  bitbucket: {
    name: 'Bitbucket',
    slug: 'bitbucket',
    url: 'https://www.bitbucket.com/',
    description: ''
  },
  github: {
    name: 'Github',
    slug: 'github',
    url: 'https://www.github.com/',
    description: ''
  },
  atlassian: {
    name: 'Atlassian',
    slug: 'atlassian',
    url: 'https://www.atlassian.com/',
    description: ''
  },
  flat: {
    name: 'Flat',
    slug: 'flat',
    url: 'https://flat.io/',
    description: 'Write your music scores online. With the easiest tool for creating sheet music together.'
  },
  stackoverflow: {
    name: 'Stack Overflow',
    slug: 'flat',
    url: '',
    description: ''
  },
  avaza: {
    name: 'Avaza',
    slug: 'avaza',
    url: 'https://www.avaza.com/',
    description: 'Beautiful all-in-one software to run your business'
  },
};
