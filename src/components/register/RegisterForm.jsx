import React from 'react';
import { connect } from 'cerebral/react';
import { isValidForm } from 'cerebral-forms';
import { translate } from 'react-i18next';

import InputText from '../forms/InputText.jsx';
import Captcha from '../forms/Captcha.jsx';

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
  form: 'register.form',
  asyncError: 'register.asyncError',
  submitting: 'register.submitting'
};

const signalProps = {
  fieldChanged: 'fieldChanged',
  onSubmit: 'register.submitted'
};

const RegisterForm = ({ onSubmit, submitting, fieldChanged, form,
  asyncError, t }) => (
  <div>
    <InputText
      label={t('USER_ID')}
      onChange={generateHandler(fieldChanged, 'register.form.userId')}
      field={form.userId}
    />
    <InputText
      label={t('PASSWORD')}
      type='password'
      onChange={generateHandler(fieldChanged, 'register.form.password')}
      field={form.password}
    />
    <InputText
      label={t('REPEAT_PASSWORD')}
      type='password'
      onChange={generateHandler(fieldChanged, 'register.form.repeatPassword')}
      field={form.repeatPassword}
    />
    <Captcha
      field={form.captcha}
      onChange={generateHandler(fieldChanged, 'register.form.captcha')}
    />
    {asyncError && <div className='c-field--error'>{asyncError}</div>}
    <button
      className='c-button c-button--block'
      type='button'
      onClick={wrapSubmit(onSubmit)}
      disabled={submitting || !isValidForm(form)}
    >
      {t('REGISTER')}
    </button>
  </div>
);

RegisterForm.propTypes = {
  form: React.PropTypes.object,
  fieldChanged: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  asyncError: React.PropTypes.string,
  submitting: React.PropTypes.bool
};

export default connect(stateProps, signalProps, translate()(RegisterForm));
