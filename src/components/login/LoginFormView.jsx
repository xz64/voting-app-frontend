import React from 'react';
import CSSModules from 'react-css-modules';

import InputText from '../forms/InputText.jsx';
import styles from './LoginFormView.css';

const LoginFormView = ({ fields: { email, password } , handleSubmit,
  submitting }) => (
  <form onSubmit={handleSubmit} styleName='loginform'>
    <InputText formField={email} placeholder='Your email address' 
      forAttr='email' labelText='Email Address' type='text'/>
    <InputText formField={password} placeholder='*******' 
      forAttr='password' labelText='Password' type='password'/>
    <button styleName='submitbutton' type="submit" disabled={submitting}>
      {submitting ? 'Please wait...' : 'Submit'}
    </button>
  </form>    
);

LoginFormView.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
}

export default CSSModules(LoginFormView, styles);
