import wentFactory from '../factories/wentFactory.js';
import loadedPage from './loadedPage.js';
import getPollListing from '../actions/getPollListing.js';
import updatePollListing from '../actions/updatePollListing.js';

export default [
  wentFactory('home'),
  ...loadedPage,
  getPollListing, {
    success: [
      updatePollListing
    ],
    error: []
  }
];
