import { set } from 'cerebral/operators';

import validateForm from '../actions/validateForm.js';
import submitForm from '../actions/submitForm.js';

export default [
  set('state:register.asyncError', null),
  validateForm, {
    true: [
      submitForm, {
        success: [],
        error: [
          set('state:register.asyncError', 'Username already taken or captcha '
            + 'incorrect.')
        ]
      }
    ],
    false: []
  }
];
