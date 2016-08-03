import { hideLoading } from 'react-redux-loading-bar';

import store from '../store/Store.js';

const Component = {
  path: 'about',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      var component = require('./AboutScreen.jsx').default;
      store.dispatch(hideLoading());
      cb(null, component);
    });
  }
};

export default Component;
