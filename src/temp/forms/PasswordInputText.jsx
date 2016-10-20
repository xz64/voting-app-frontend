import React, { PropTypes } from 'react';

import InputText from './InputText.jsx';

const PasswordInputText = (props) => (
  <div>
    <InputText labelText='Password' type='password' {...props.password}/>
    <InputText labelText='Repeat Password' type='password'
      {...props.repeatpassword}/>
  </div>
);

PasswordInputText.propTypes = {
  password: PropTypes.object,
  repeatpassword: PropTypes.object
};

export default PasswordInputText;
