import React from 'react';
import { Link } from 'react-router';

import InputText from '../forms/InputText.jsx';

const LoginFormView = ({ fields: { email, password } , handleSubmit,
  submitting }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <InputText formField={email} forAttr='email' labelText='Email Address'
        type='text'/>
      <InputText formField={password} forAttr='password' labelText='Password'
        type='password'/>
      <button type='submit' disabled={submitting}>
        {submitting ? 'Please wait...' : 'Login'}
      </button>
    </form>
    Don't have a login? Click <Link to='register'>here</Link>
    {' '}to register.
  </div>
);

LoginFormView.propTypes = {
  fields: React.PropTypes.array.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default LoginFormView;
