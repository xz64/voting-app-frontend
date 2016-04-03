var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

var buildDir = 'dist';
var isProduction = process.env.NODE_ENV === 'production';

var htmlMinificationConfig = isProduction ?
  {
    collapseWhitespace: true
  } :
  {};

var minifyJSPlugin = isProduction ? new webpack.optimize.UglifyJsPlugin({}) :
  Function.prototype;

var config = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: buildDir,
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Voting App',
      minify: htmlMinificationConfig
    }),
    new CleanWebpackPlugin([buildDir]),
    minifyJSPlugin
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel', 'eslint'], exclude: /node_modules/}
    ]
  },
  eslint: {
    configFile: path.join(__dirname, '.eslintrc.json')
  }
};

module.exports = config;
