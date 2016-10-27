import React from 'react';
import { connect } from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';

import InputText from '../forms/InputText.jsx';

function generateHandler(fieldChanged, field) {
  return event => fieldChanged({
    field,
    value: event.target.value,
    touched: true
  });
}

function wrapSubmit(onSubmit) {
  return () => { onSubmit(); };
}

const stateProps = {
  form: 'login.form',
  message: 'login.message',
  asyncError: 'login.asyncError',
  loggingIn: 'login.loggingIn'
};

const signalProps = {
  fieldChanged: 'forms.fieldChanged',
  onSubmit: 'login.submitted'
};

const LoginForm = ({ message, onSubmit, fieldChanged, form, asyncError,
  loggingIn }) => (
  <div>
    {message && <div>{message}</div>}
    <InputText
      label='User ID'
      onChange={generateHandler(fieldChanged, 'login.form.userId')}
      field={form.userId}
    />
    <InputText
      label='Password'
      type='password'
      onChange={generateHandler(fieldChanged, 'login.form.password')}
      field={form.password}
    />
    {asyncError && <div className='c-field--error'>{asyncError}</div>}
    <button
      className='c-button c-button--block'
      type='button'
      onClick={wrapSubmit(onSubmit)}
      disabled={!isValidForm(form) || loggingIn}
    >
      {loggingIn ? 'Logging in...' : 'Login'}
    </button>
  </div>
);

LoginForm.propTypes = {
  form: React.PropTypes.object,
  fieldChanged: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  asyncError: React.PropTypes.string,
  message: React.PropTypes.string,
  loggingIn: React.PropTypes.bool
};

export default connect(stateProps, signalProps, LoginForm);
