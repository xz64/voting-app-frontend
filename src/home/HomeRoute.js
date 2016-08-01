import { hideLoading } from 'react-redux-loading-bar';
import store from '../store/Store.js';

const Component = {
  getComponent(nextState, cb) {
    require.ensure(['./HomeScreen.jsx'], (require) => {
      var component = require('./HomeScreen.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
