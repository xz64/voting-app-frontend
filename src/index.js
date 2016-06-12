import React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap';

import App from './App.jsx';
import i18n from './i18n.js';
import mainReducer from './reducers/mainReducer.js';

let store = createStore(mainReducer, undefined,
  window.devToolsExtension && window.devToolsExtension());

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    </Provider>,
    document.getElementById('root')
  );
});
