import { reduxForm } from 'redux-form';

import RegisterFormView from './RegisterFormView.jsx';
import validate from './RegisterValidator.js';

const RegisterContainer = reduxForm({
  name: 'register',
  form: 'register',
  fields: ['email', 'password', 'repeatpassword', 'captcharesponse'],
  validate,
  onSubmit: (values) => new Promise((resolve/*, reject*/) => {
    setTimeout(() => resolve(values), 1000);
  }),
  onSubmitSuccess: (/*values, dispatch*/) => {
    // notify user a confirmation email has been sent.
  }
})(RegisterFormView);

export default RegisterContainer;
