import { Controller } from 'cerebral';
import Model from 'cerebral/models/immutable';
import Router from 'cerebral-module-router';
import Devtools from 'cerebral-module-devtools';

import App from './modules/App/index.js';

const controller = Controller(Model({}));

controller.addModules({
  app: App,
  router: Router({
    '/': 'app.wentHome',
    '/about': 'app.wentAbout'
  }, {
    onlyHash: true,
    preventAutostart: false,
    allowEscape: false,
    query: true
  }),
  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools()
});

export default controller;
