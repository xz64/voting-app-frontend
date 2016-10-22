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
        requiredMessage: 'Password is required.',
        validations: [
          'minLength:15',
          'equalsField:repeatPassword'
        ],
        errorMessages: [
          'Password must be at least 15 characters.',
          'Password must match repeat password.'
        ],
        dependsOn: 'register.form.repeatPassword'
      },
      repeatPassword: {
        value: null,
        isRequired: true,
        requiredMessage: 'Repeat password is required.',
        validations: ['equalsField:password'],
        dependsOn: 'register.form.password'
      },
      captcha: {
        value: null,
        isRequired: true,
        requiredMessage: 'Captcha is required.'
      }
    }),
    asyncError: null
  });

  module.addSignals({
    submitted
  });
};
