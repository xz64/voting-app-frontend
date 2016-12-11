import { Controller } from 'cerebral';
import { ContextProvider } from 'cerebral/providers';
import Router from 'cerebral-router';
import { changeField } from 'cerebral-forms';
import Devtools from 'cerebral/devtools';
import axios from 'axios';

import App from './modules/App/index.js';
import Register from './modules/Register/index.js';
import Login from './modules/Login/index.js';

const axiosInstance =  axios.create({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.config.url !== '/api/whoami' && error.response.status === 401) {
    window.setTimeout(() => {
      window.location.href = '/#/login';
    });
  }
  return Promise.reject(error);
});

const controller = Controller({
  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools(),
  providers: [
    ContextProvider({ axios: axiosInstance })
  ],
  signals: {
    fieldChanged: changeField
  },
  router: Router({
    routes: {
      '/': 'app.wentHome',
      '/about': 'app.wentAbout',
      '/register': 'app.wentRegister',
      '/login': 'app.wentLogin',
      '/logout': 'app.wentLogout'
    },
    onlyHash: true,
    preventAutostart: false,
    allowEscape: false,
    query: true
  }),
  modules: {
    app: App,
    register: Register,
    login: Login
  }
});

export default controller;
