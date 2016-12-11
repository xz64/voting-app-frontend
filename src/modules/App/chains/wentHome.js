import wentFactory from '../factories/wentFactory.js';

import loadedPage from './loadedPage.js';

export default [
  wentFactory('home'),
  ...loadedPage
];
