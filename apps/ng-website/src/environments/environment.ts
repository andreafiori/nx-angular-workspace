// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  auth0Domain: 'https://YOUR-AUTH0-DOMAIN.auth0.com/',
  auth0ClientId: 'YOUR-AUTH0-CLIENT-ID',
  auth0ConnectionName: 'YOUR-DATABASE-CONNECTION-NAME',
  auth0Password: 'password',
  auth0Scope: 'scope',

  flickr_api_key: '',
  youtube_api_key: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
