import React from 'react';
import { translate } from 'react-i18next';

import LoginForm from './LoginForm.jsx';

const LoginScreen = ({ t }) => (
  <div className='va-form-container'>
    <LoginForm/>
    <div>
      {t('REGISTER_SUGGESTION')}
    </div>
    <div>
      <a href='/#/register'>{t('REGISTER')}</a>
    </div>
  </div>
);

LoginScreen.propTypes = {
  t: React.PropTypes.func
};

export default translate()(LoginScreen);
