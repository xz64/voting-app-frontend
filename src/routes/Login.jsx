import React from 'react';
import CSSModules from 'react-css-modules';

import LoginContainer from '../components/login/LoginContainer.jsx';
import styles from './Login.css';

const Login = () => (
  <div styleName='login'>
    <div styleName='centerblock'>
      <div styleName='centerblock_content'>
        <LoginContainer/>
      </div>
    </div>
  </div>
);

export default CSSModules(Login, styles);
