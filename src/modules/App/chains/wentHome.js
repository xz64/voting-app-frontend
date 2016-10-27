import { set } from 'cerebral/operators';

import loadedPage from './loadedPage.js';

export default [
  set('state:app.currentRoute', 'home'),
  ...loadedPage
];
