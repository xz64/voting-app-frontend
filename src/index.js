import React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'redux-little-router';
import 'whatwg-fetch';
import './styles/main.scss';

import i18n from './i18n/i18n.js';
import store from './store/Store.js';
import AppScreen from './app/AppScreen.jsx';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider store={store}>
          <AppScreen/>
        </RouterProvider>
      </I18nextProvider>
    </Provider>,
    document.getElementById('root')
  );
});
