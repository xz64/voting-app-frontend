import { state, set } from 'cerebral/operators';
import { redirect } from 'cerebral-router';

import validateForm from '../actions/validateForm.js';
import submitForm from '../actions/submitForm.js';

export default [
  set(state`login.loggingIn`, true),
  set(state`login.message`, null),
  set(state`login.asyncError`, null),
  validateForm, {
    true: [
      submitForm, {
        success: [
          redirect('/')
        ],
        error: [
          set(state`login.asyncError`, 'Username or password incorrect.')
        ]
      }
    ],
    false: []
  },
  set(state`login.loggingIn`, false)
];
