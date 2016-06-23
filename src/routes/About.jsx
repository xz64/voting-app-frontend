import { hideLoading } from 'react-redux-loading-bar'
import store from '../store.js';

const Component = {
  path: 'about',
  getComponent(nextState, cb) {
    require.ensure(['../components/routes/About.jsx'], (require) => {
      var component = require('../components/routes/About.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
