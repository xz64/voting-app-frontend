/*eslint-env node*/
/*eslint-disable no-console*/
require('babel-register');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.babel.js').default;
var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 8080;

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(port, host, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://' + host + ':' + port + '/');
});
