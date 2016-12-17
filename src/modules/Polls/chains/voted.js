import { set, state, input } from 'cerebral/operators';

import sendVote from '../actions/sendVote.js';
import incrementVoteCount from '../actions/incrementVoteCount.js';

export default [
  set(state`polls.showVoteSuccess`, false),
  sendVote, {
    success: [
      set(state`polls.voteError`, null),
      incrementVoteCount,
      set(state`polls.showVoteSuccess`, true)
    ],
    error: [
      set(state`polls.voteError`, input`error.error`)
    ]
  },
  set(state`polls.currentAnswer`, null)
];
