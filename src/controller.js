import { Controller } from 'cerebral';
import Model from 'cerebral/models/immutable';
import Router from 'cerebral-module-router';
import Devtools from 'cerebral-module-devtools';
import Forms from 'cerebral-module-forms';
import axios from 'axios';

import App from './modules/App/index.js';
import Register from './modules/Register/index.js';
import Login from './modules/Login/index.js';

const controller = Controller(Model({}));

const axiosInstance =  axios.create({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    window.location.href='/#/login';
  }
  return Promise.reject(error);
});

controller.addServices({
  http: axiosInstance
});

controller.addModules({
  app: App,
  register: Register,
  login: Login,
  forms: Forms(),
  router: Router({
    '/': 'app.wentHome',
    '/about': 'app.wentAbout',
    '/register': 'app.wentRegister',
    '/login': 'app.wentLogin',
    '/logout': 'app.wentLogout'
  }, {
    onlyHash: true,
    preventAutostart: false,
    allowEscape: false,
    query: true
  }),
  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools()
});

export default controller;
