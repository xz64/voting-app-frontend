import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import InputText from '../forms/InputText.jsx';
import styles from './LoginFormView.css';

const LoginFormView = ({ fields: { email, password } , handleSubmit,
  submitting }) => (
  <div styleName="loginform">
    <form onSubmit={handleSubmit}>
      <InputText formField={email} forAttr='email' labelText='Email Address'
        type='text'/>
      <InputText formField={password} forAttr='password' labelText='Password'
        type='password'/>
      <button styleName='submitbutton' type="submit" disabled={submitting}>
        {submitting ? 'Please wait...' : 'Login'}
      </button>
    </form>    
    Don't have a login? Click <Link styleName='link' to='register'>here</Link>
    {' '}to register.
  </div>
);

LoginFormView.propTypes = {
  fields: React.PropTypes.array.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default CSSModules(LoginFormView, styles);
