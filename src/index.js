import React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import App from './App.jsx';
import i18n from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App/>
    </I18nextProvider>,
    document.getElementById('root')
  );
});
