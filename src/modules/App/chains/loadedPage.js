import { when } from 'cerebral/operators';

import getCurrentUser from '../actions/getCurrentUser.js';
import updateUser from '../actions/updateUser.js';

export default [
  when('state:app.user.id'), {
    false: [
      getCurrentUser, {
        success: [
          updateUser
        ],
        error: []
      }
    ],
    true: []
  }
];
