'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'my-trips',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: 'AIzaSyCG5iYXv69Z1j-iloIDOEde4QuDcTi6KEo',
      authDomain: 'my-trips-8c7e5.firebaseapp.com',
      databaseURL: 'https://my-trips-8c7e5.firebaseio.com',
      projectId: 'my-trips-8c7e5',
      storageBucket: 'my-trips-8c7e5.appspot.com',
      messagingSenderId: "991471746040",
      appId: "1:991471746040:web:3ccffb77b775cbee8e740d",
      measurementId: "G-LWWDT2N9CP"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
