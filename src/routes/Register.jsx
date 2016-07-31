import { hideLoading } from 'react-redux-loading-bar';
import store from '../store.js';

const Component = {
  path: 'register',
  getComponent(nextState, cb) {
    require.ensure(['../components/routes/Register.jsx'], (require) => {
      var component = require('../components/routes/Register.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
