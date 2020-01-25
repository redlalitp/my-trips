import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('trips');
  this.route('photos');
  this.route('stats');
  this.route('trip', { path: '/trip/:id' });
});
