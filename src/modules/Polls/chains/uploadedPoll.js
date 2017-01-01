import { set, state } from 'cerebral/operators';
import { redirect } from 'cerebral-router';
import { resetForm } from 'cerebral-forms';

import uploadPoll from '../actions/uploadPoll.js';

export default [
  set(state`polls.submitting`, true),
  set(state`polls.asyncError`, null),
  uploadPoll, {
    success: [
      resetForm('polls.editingPoll'),
      set(state`polls.editingPollId`, null),
      redirect('/myPolls')
    ],
    error: [
      set(state`polls.asyncError`, 'Poll rejected by server')
    ]
  },
  set(state`polls.submitting`, false)
];
