import Form from 'cerebral-module-forms/Form';

import submitted from './chains/submitted.js';

export default module => {
  module.addState({
    form: Form({
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
  });

  module.addSignals({
    submitted
  });
};
