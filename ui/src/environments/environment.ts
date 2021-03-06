// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gateway: "http://localhost:3000",
  callback: "http://localhost:4200/callback",
  domain: "dev-xen3yk7y.auth0.com",
  clientId: "fpN60WjyFauCUo52uXhNp3X5QPpyulmb",
  audience: "https://my-golang-api",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
