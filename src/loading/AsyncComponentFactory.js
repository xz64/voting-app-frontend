import React from 'react';
import { asyncComponent } from 'react-async-loading';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import store from '../store/Store.js';
import LoadingComponent from './LoadingComponent.jsx';

function createComponent(promiseFunction) {
  return asyncComponent(
    loadingBarWrapper(promiseFunction),
    { placeholder: <LoadingComponent/> }
  );
}

function loadingBarWrapper(promiseFunction) {
  return function() {
    return new Promise(function(resolve, reject) {
      store.dispatch(showLoading());
      promiseFunction()
      .then(function(component) {
        store.dispatch(hideLoading());
        resolve(component);
      })
      .catch(reject);
    });
  };
}


export default createComponent;
