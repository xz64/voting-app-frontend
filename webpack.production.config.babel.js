/*eslint-env node */
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import baseConfig from './webpack.base.config.babel.js';
import { buildDir } from './webpack.base.config.babel.js';

let config = Object.assign({}, baseConfig);

config.resolve = {
  alias: {
    'react': 'react-lite',
    'react-dom': 'react-lite'
  }
};

config.plugins.push(
  new CleanWebpackPlugin([buildDir]),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    },
    comments: false,
    sourceMap: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  })
);

export default config;
