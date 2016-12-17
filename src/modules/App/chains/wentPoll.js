import { set, state } from 'cerebral/operators';

import wentFactory from '../factories/wentFactory.js';
import getPoll from '../../Polls/actions/getPoll.js';
import setCurrentPoll from '../../Polls/actions/setCurrentPoll.js';

export default [
  wentFactory('poll'),
  set(state`polls.voteError`, null),
  getPoll, {
    success: [
      setCurrentPoll
    ],
    error: []
  }
];
