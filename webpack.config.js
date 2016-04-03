var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var config = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: 'dist',
    filename: 'app.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;
