import React from 'react';

import LoginForm from './LoginForm.jsx';

const LoginScreen = () => (
  <div className='va-form-container'>
    <LoginForm/>
    <div>
      {`Don't have an account? Click `}
      <a href='/#/register'>here</a>
      {` to register.`}
    </div>
  </div>
);

export default LoginScreen;
