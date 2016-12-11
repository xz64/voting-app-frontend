import React from 'react';
import { connect } from 'cerebral/react';
import { isValidForm } from 'cerebral-forms';
import { translate } from 'react-i18next';

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
  fieldChanged: 'fieldChanged',
  onSubmit: 'login.submitted'
};

const LoginForm = ({ message, onSubmit, fieldChanged, form, asyncError,
  loggingIn, t }) => (
  <div>
    {message && <div>{message}</div>}
    <InputText
      label={t('USER_ID')}
      onChange={generateHandler(fieldChanged, 'login.form.userId')}
      field={form.userId}
    />
    <InputText
      label={t('PASSWORD')}
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
      {t(loggingIn ? 'LOGGING_IN' : 'LOGIN')}
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

export default connect(stateProps, signalProps, translate()(LoginForm));
