import React from 'react';
import { translate } from 'react-i18next';

const AboutScreen = ({ t }) => (
  <div>
    {t('WELCOME_TO_ABOUT')}
    <a href='/#/'>{t('GO_HOME')}</a>
  </div>
);

export default translate()(AboutScreen);
