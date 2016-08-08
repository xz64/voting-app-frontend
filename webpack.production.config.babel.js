/*eslint-env node */
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import baseConfig from './webpack.base.config.babel.js';
import { buildDir } from './webpack.base.config.babel.js';

const errors = {
  MISSING_RECAPTCHA_SITE_KEY: 'Please set the RECAPTCHA_SITE_KEY environment'
    + ' variable to your ReCAPTCHA site key'
};

if(!process.env.RECAPTCHA_SITE_KEY) {
  throw errors.MISSING_RECAPTCHA_SITE_KEY;
}

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
      'NODE_ENV': '"production"',
      'RECAPTCHA_SITE_KEY': process.env.RECAPTCHA_SITE_KEY
    }
  })
);

export default config;
