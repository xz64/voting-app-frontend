import React from 'react';
import { Field, Fields } from 'redux-form';

import InputText from '../forms/InputText.jsx';
import PasswordInputText from '../forms/PasswordInputText.jsx';
import Captcha from '../forms/Captcha.jsx';

const RegisterFormView = ({ handleSubmit, submitting }) => (
  <div>
      <Field name='email' component={InputText} labelText='Email'/>
      <Fields names={['password', 'repeatpassword']}
        component={PasswordInputText}/>
      <div>
        <Field name='captcharesponse' component={Captcha}/>
      </div>
      <button type='submit' disabled={submitting}
        onClick={handleSubmit}>
        {submitting ? 'Please wait...' : 'Register'}
      </button>
  </div>
);

RegisterFormView.propTypes = {
  fields: React.PropTypes.array.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default RegisterFormView;
