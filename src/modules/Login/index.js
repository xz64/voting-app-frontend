import { form } from 'cerebral-forms';

import submitted from './chains/submitted.js';

export default {
  state: {
    form: form({
      userId: {
        value: null,
        isRequired: true,
        requiredMessage: 'User ID is required.'
      },
      password: {
        value: null,
        isRequired: true,
        requiredMessage: 'Password is required.'
      }
    }),
    asyncError: null,
    message: null,
    loggingIn: false
  },
  signals: {
    submitted
  }
};
