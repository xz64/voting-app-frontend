import React from 'react';
import { Link } from 'redux-little-router';

import InputText from '../forms/InputText.jsx';

const LoginFormView = ({ fields: { email, password } , handleSubmit,
  submitting }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <InputText formField={email} forAttr='email' labelText='Email Address'
        type='text'/>
      <InputText formField={password} forAttr='password' labelText='Password'
        type='password'/>
      <fieldset className='c-fieldset'>
        <button className='c-button c-button--block c-button--primary'
          type='submit' disabled={submitting}>
          {submitting ? 'Please wait...' : 'Login'}
        </button>
      </fieldset>
    </form>
    Don't have a login? Click
      <Link className='c-link' href='/register'>here</Link> {' '}to register.
  </div>
);

LoginFormView.propTypes = {
  fields: React.PropTypes.array.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default LoginFormView;
