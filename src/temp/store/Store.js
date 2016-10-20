import { createStore, combineReducers, compose } from 'redux';
import { createStoreWithRouter, initializeCurrentLocation }
  from 'redux-little-router';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';

import routeConfig from '../routes/Routes.js';
import HomeReducer from '../home/HomeReducer.js';

const reducer = combineReducers({
  home: HomeReducer,
  loadingBar: loadingBarReducer,
  routing: routerReducer,
  form: formReducer
});

let enhancers = [
  createStoreWithRouter(routeConfig)
];

if(process.env.NODE_ENV !== 'production') {
  if(window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }
}

const store = createStore(reducer, undefined, compose(...enhancers));

const initialLocation = store.getState().router;

if(initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

export default store;
