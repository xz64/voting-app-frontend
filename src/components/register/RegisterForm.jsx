import React from 'react';
import { connect } from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';

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
  asyncError: 'register.asyncError'
};

const signalProps = {
  fieldChanged: 'forms.fieldChanged',
  onSubmit: 'register.submitted'
};

const RegisterForm = ({ onSubmit, fieldChanged, form, asyncError }) => (
  <div>
    <InputText
      label='User ID'
      onChange={generateHandler(fieldChanged, 'register.form.userId')}
      field={form.userId}
    />
    <InputText
      label='Password'
      type='password'
      onChange={generateHandler(fieldChanged, 'register.form.password')}
      field={form.password}
    />
    <InputText
      label='Repeat Password'
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
      disabled={!isValidForm(form)}
    >
      Register
    </button>
  </div>
);

RegisterForm.propTypes = {
  form: React.PropTypes.object,
  fieldChanged: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  asyncError: React.PropTypes.string
};

export default connect(stateProps, signalProps, RegisterForm);
