import { set, state } from 'cerebral/operators';
import { redirect } from 'cerebral-router';

import uploadPoll from '../actions/uploadPoll.js';

export default [
  set(state`polls.submitting`, true),
  set(state`polls.asyncError`, null),
  uploadPoll, {
    success: [
      redirect('/myPolls')
    ],
    error: [
      set(state`polls.asyncError`, 'Poll rejected by server')
    ]
  },
  set(state`polls.submitting`, false)
];
