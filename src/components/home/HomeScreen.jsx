import React from 'react';
import { translate } from 'react-i18next';

const HomeScreen = ({ t }) => (
  <div>
    <h1>{t('WELCOME_TO_APP')}</h1>
  </div>
);

export default translate()(HomeScreen);
