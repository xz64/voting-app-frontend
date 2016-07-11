import React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { showLoading } from 'react-redux-loading-bar';
import 'blaze/dist/generic.global.min.css';

import i18n from './i18n.js';
import routes from './routes.jsx';
import store from './store.js';

const history = syncHistoryWithStore(browserHistory, store);

history.listen(() => {
  store.dispatch(showLoading());
});

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router history={history} routes={routes}/>
      </I18nextProvider>
    </Provider>,
    document.getElementById('root')
  );
});
