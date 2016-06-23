const Component = {
  path: '/',
  getComponent: function(nextState, callback) {
    require.ensure(['./App.jsx'], function(require) {
      callback(null, require('./App.jsx').default);
    });
  },
  getIndexRoute: function(location, callback) {
    require.ensure(['./routes/Home.jsx'], function(require) {
      callback(null, require('./routes/Home.jsx').default);
    });
  },
  getChildRoutes: function(location, callback) {
    require.ensure(['./routes/About.jsx', './routes/Login.jsx'],
      function(require) {
      callback(null, [
        require('./routes/About.jsx').default,
        require('./routes/Login.jsx').default
      ]);
    });
  }
};

export default Component;
