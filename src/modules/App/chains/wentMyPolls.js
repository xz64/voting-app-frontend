import { set, state } from 'cerebral/operators';

import wentFactory from '../factories/wentFactory.js';
import getMyPolls from '../../Polls/actions/getMyPolls.js';
import setMyPolls from '../../Polls/actions/setMyPolls.js';

export default [
  ...wentFactory('myPolls'),
  set(state`polls.myPolls`, []),
  getMyPolls, {
    success: [
      setMyPolls
    ],
    error: []
  }
];
