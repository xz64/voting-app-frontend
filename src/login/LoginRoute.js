import { hideLoading } from 'react-redux-loading-bar';
import store from '../store/Store.js';

const Component = {
  path: 'login',
  getComponent(nextState, cb) {
    require.ensure(['./LoginScreen.jsx'], (require) => {
      var component = require('./LoginScreen.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
