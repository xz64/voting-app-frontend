import React from 'react';
import CSSModules from 'react-css-modules';
import { Field, Fields } from 'redux-form';

import InputText from '../forms/InputText.jsx';
import PasswordInputText from '../forms/PasswordInputText.jsx';
import Captcha from '../forms/Captcha.jsx';
import styles from './RegisterFormView.css';

const RegisterFormView = ({ handleSubmit, submitting }) => (
  <div styleName='content-block'>
      <Field name='email' component={InputText} labelText='Email'/>
      <Fields names={['password', 'repeatpassword']}
        component={PasswordInputText}/>
      <div styleName='captcha-field'>
        <Field name='captcharesponse' component={Captcha}/>
      </div>
      <button styleName='submitbutton' type='submit' disabled={submitting}
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

export default CSSModules(RegisterFormView, styles);
