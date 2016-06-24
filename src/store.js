import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';

import mainReducer from './reducers/mainReducer.js';


const reducer = combineReducers({
  mainReducer,
  loadingBar: loadingBarReducer,
  routing: routerReducer,
  form: formReducer
});

let store;

if(process.env.NODE_ENV === 'production') {
  store = createStore(reducer);
}
else {
  store = createStore(reducer, undefined,
    window.devToolsExtension && window.devToolsExtension());
}

export default store;
