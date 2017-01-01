import { state, set } from 'cerebral/operators';
import { resetForm } from 'cerebral-forms';

import wentFactory from '../factories/wentFactory.js';

export default [
  ...wentFactory('createNewPoll'),
  set(state`polls.editingPollId`, null),
  resetForm('polls.editingPoll')
];
