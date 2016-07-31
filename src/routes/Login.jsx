import { hideLoading } from 'react-redux-loading-bar';
import store from '../store.js';

const Component = {
  path: 'login',
  getComponent(nextState, cb) {
    require.ensure(['../components/routes/Login.jsx'], (require) => {
      var component = require('../components/routes/Login.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
