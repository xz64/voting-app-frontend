import { resetForm } from 'cerebral-forms';

import wentFactory from '../factories/wentFactory.js';
import getPoll from '../../Polls/actions/getPoll.js';
import setCurrentPollForEditing from
  '../../Polls/actions/setCurrentPollForEditing.js';

export default [
  ...wentFactory('editPoll'),
  getPoll, {
    success: [
      resetForm('polls.editingPoll'),
      setCurrentPollForEditing
    ],
    error: []
  }
];
