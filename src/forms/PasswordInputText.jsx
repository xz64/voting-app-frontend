import React, { PropTypes } from 'react';

import InputText from './InputText.jsx';

const PasswordInputText = (props) => (
  <div>
    <InputText labelText='Password' type='password' {...props.password}
      hideError={props.repeatpassword.meta.active}/>
    <InputText labelText='Repeat Password' type='password'
      {...props.repeatpassword} hideError={false}/>
  </div>
);

PasswordInputText.propTypes = {
  password: PropTypes.object,
  repeatpassword: PropTypes.object
};

export default PasswordInputText;
