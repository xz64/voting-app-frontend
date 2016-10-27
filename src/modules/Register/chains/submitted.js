import { set } from 'cerebral/operators';
import redirect from 'cerebral-module-router/redirect';

import validateForm from '../actions/validateForm.js';
import submitForm from '../actions/submitForm.js';

export default [
  set('state:register.asyncError', null),
  validateForm, {
    true: [
      submitForm, {
        success: [
          redirect('/login'),
          set('state:login.message', 'Registration successful. Please log in.')
        ],
        error: [
          set('state:register.asyncError', 'Username already taken or captcha '
            + 'incorrect.')
        ]
      }
    ],
    false: []
  }
];
