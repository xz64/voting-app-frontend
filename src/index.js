import React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import i18n from './i18n.js';
import mainReducer from './reducers/mainReducer.js';
import routes from './routes.jsx';

const reducer = combineReducers({
  mainReducer,
  routing: routerReducer,
  form: formReducer
});

const store = createStore(reducer, undefined,
  window.devToolsExtension && window.devToolsExtension());

const history = syncHistoryWithStore(browserHistory, store);

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
