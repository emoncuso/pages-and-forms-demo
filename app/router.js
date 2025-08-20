import EmberRouter from '@ember/routing/router';
import config from 'pages-and-forms-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('users', { path: '/', }, function () {
    this.route('list', { path: '/' });
    this.route('create');
    this.route('user', { path: '/:id'});
  });
});
