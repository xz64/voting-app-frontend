import { Controller } from 'cerebral';
import Model from 'cerebral/models/immutable';
import Router from 'cerebral-module-router';
import Http from 'cerebral-module-http';
import Devtools from 'cerebral-module-devtools';
import Forms from 'cerebral-module-forms';

import App from './modules/App/index.js';
import Register from './modules/Register/index.js';

const controller = Controller(Model({}));

controller.addModules({
  app: App,
  register: Register,
  forms: Forms(),
  router: Router({
    '/': 'app.wentHome',
    '/about': 'app.wentAbout',
    '/register': 'app.wentRegister'
  }, {
    onlyHash: true,
    preventAutostart: false,
    allowEscape: false,
    query: true
  }),
  http: Http({
    baseUrl: '/api'
  }),
  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools()
});

export default controller;
