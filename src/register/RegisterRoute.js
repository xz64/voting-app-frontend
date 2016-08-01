import { hideLoading } from 'react-redux-loading-bar';

import store from '../store/Store.js';

const Component = {
  path: 'register',
  getComponent(nextState, cb) {
    require.ensure(['./RegisterScreen.jsx'], (require) => {
      var component = require('./RegisterScreen.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
