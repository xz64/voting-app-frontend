import { state, set } from 'cerebral/operators';
import { redirect } from 'cerebral-router';

import validateForm from '../actions/validateForm.js';
import submitForm from '../actions/submitForm.js';

export default [
  set(state`register.submitting`, true),
  set(state`register.asyncError`, null),
  validateForm, {
    true: [
      submitForm, {
        success: [
          redirect('/login'),
          set(state`login.message`, 'Registration successful. Please log in.')
        ],
        error: [
          set(state`register.asyncError`, 'Username already taken or captcha '
            + 'incorrect.')
        ]
      },
      set(state`register.submitting`, false)
    ],
    false: []
  }
];
