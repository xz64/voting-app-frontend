import React from 'react';
import { Link } from 'redux-little-router';
import { Field } from 'redux-form';

import InputText from '../forms/InputText.jsx';

const LoginFormView = ({ fields: { email, password } , handleSubmit,
  submitting }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field name='email' component={InputText} labelText='Email'/>
      <Field name='password' component={InputText} labelText='Password'/>
      <fieldset className='c-fieldset'>
        <button className='c-button c-button--block c-button--primary'
          type='submit' disabled={submitting}>
          {submitting ? 'Please wait...' : 'Login'}
        </button>
      </fieldset>
    </form>
    Don't have a login? Click{' '}
      <Link className='c-link' href='/register'>here</Link> {' '}to register.
  </div>
);

LoginFormView.propTypes = {
  fields: React.PropTypes.array.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default LoginFormView;
