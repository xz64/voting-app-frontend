import wentFactory from '../factories/wentFactory.js';
import getPollListing from '../actions/getPollListing.js';
import updatePollListing from '../actions/updatePollListing.js';

export default [
  ...wentFactory('home'),
  getPollListing, {
    success: [
      updatePollListing
    ],
    error: []
  }
];
