import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let title = 'Voting App';
let srcDir = 'src';
let buildDir = 'dist';
let isProduction = process.env.NODE_ENV === 'production';
let devServerUrl = 'http://localhost:8080';

let htmlMinificationConfig = isProduction ?
  {
    collapseWhitespace: true
  } :
  {};

let devtools = isProduction ? '' : 'source-map';

let minifyJSPlugin = isProduction ? new webpack.optimize.UglifyJsPlugin({}) :
  Function.prototype;

let config = {
  entry: [
    'webpack-dev-server/client?' + devServerUrl,
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.join(__dirname, srcDir, 'index.js')
  ],
  output: {
    path: path.join(__dirname, buildDir),
    publicPath: '/',
    filename: 'app.js'
  },
  resolve: {
    alias: {
      'react': isProduction ? 'react-lite' : 'react',
      'react-dom': isProduction ? 'react-lite' : 'react-dom'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: title,
      minify: htmlMinificationConfig,
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new CleanWebpackPlugin([buildDir]),
    minifyJSPlugin,
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'],
        exclude: /node_modules/},
      {test: /\.css/, loader: ExtractTextPlugin.extract('style-loader',
        'css-loader'), exclude: /node_modules/}
    ]
  },
  devtool: devtools
};

export default config;
