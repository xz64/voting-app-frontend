const Component = {
  path: '/',
  getComponent: function(nextState, callback) {
    require.ensure([], function(require) {
      callback(null, require('./AppScreen.jsx').default);
    });
  },
  getIndexRoute: function(location, callback) {
    require.ensure([], function(require) {
      callback(null, require('../home//HomeRoute.js').default);
    });
  },
  getChildRoutes: function(location, callback) {
    require.ensure([], function(require) {
      callback(null, [
        require('../about/AboutRoute.js').default,
        require('../login/LoginRoute.js').default,
        require('../register/RegisterRoute.js').default
      ]);
    });
  }
};

export default Component;
