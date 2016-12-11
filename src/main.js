import React from 'react';
import { render } from 'react-dom';
import { Container } from 'cerebral/react';
import { I18nextProvider } from 'react-i18next';

import './styles/main.scss';
import controller from './controller.js';
import i18n from './i18n/i18n.js';
import AppScreen from './components/app/AppScreen.jsx';

render(
  <Container controller={controller}>
    <I18nextProvider i18n={i18n}>
      <AppScreen/>
    </I18nextProvider>
  </Container>,
  document.getElementById('root')
);
