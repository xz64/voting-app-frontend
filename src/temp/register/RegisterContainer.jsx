import { reduxForm } from 'redux-form';

import RegisterFormView from './RegisterFormView.jsx';
import validate from './RegisterValidator.js';

const RegisterContainer = reduxForm({
  name: 'register',
  form: 'register',
  fields: ['email', 'password', 'repeatpassword', 'captcharesponse'],
  validate,
  onSubmit: (values) => new Promise((resolve, reject) => {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(function(data) {
      return data.text();
    })
    .then(function() {
      resolve(values);
    })
    .catch(function(err) {
      reject(err);
    });
  }),
  onSubmitSuccess: (/*values, dispatch*/) => {
    // notify user a confirmation email has been sent.
  }
})(RegisterFormView);

export default RegisterContainer;
