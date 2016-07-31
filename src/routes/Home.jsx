import { hideLoading } from 'react-redux-loading-bar';
import store from '../store.js';

const Component = {
  getComponent(nextState, cb) {
    require.ensure(['../components/routes/Home.jsx'], (require) => {
      var component = require('../components/routes/Home.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
