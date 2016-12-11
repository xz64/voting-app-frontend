import { form } from 'cerebral-forms';

import submitted from './chains/submitted.js';

export default {
  state: {
    form: form({
      userId: {
        value: '',
        isRequired: true,
        isValueRules: ['isValue'],
        requiredMessage: 'User ID is required.'
      },
      password: {
        value: '',
        isRequired: true,
        isValueRules: ['isValue'],
        requiredMessage: 'Password is required.',
        validationRules: [
          'minLength:15',
          'equalsField:password'
        ],
        errorMessages: [
          'Password must be at least 15 characters.',
          'Password must match repeat password.'
        ],
        dependsOn: 'register.form.repeatPassword'
      },
      repeatPassword: {
        value: '',
        isRequired: true,
        isValueRules: ['isValue'],
        validationRules: [
          'equalsField:password'
        ],
        errorMessages: [
          'Password must match repeat password.'
        ],
        requiredMessage: 'Repeat password is required.',
        dependsOn: 'register.form.password'
      },
      captcha: {
        value: null,
        isRequired: true,
        requiredMessage: 'Captcha is required.'
      }
    }),
    asyncError: null,
    submitting: false
  },
  signals: {
    submitted
  }
};
