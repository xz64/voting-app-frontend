var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production';

var config = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: 'dist',
    filename: 'app.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Voting App',
    minify: {
      collapseWhitespace: true
    }
  })]
};

module.exports = config;
