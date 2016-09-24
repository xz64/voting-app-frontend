/*eslint-env node */
import webpack from 'webpack';
import baseConfig, { generatePurifyPlugin, generateScssLoader } from
  './webpack.base.config.babel.js';

let devServerUrl = 'http://localhost:8080';

let config = Object.assign({}, baseConfig);

config.entry = [
  'webpack-dev-server/client?' + devServerUrl,
  //'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
].concat(config.entry);

//config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'RECAPTCHA_SITE_KEY': '"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"'
    }
  }),
  generatePurifyPlugin(false)
);

config.module.loaders.push(generateScssLoader(false));
config.devtool = 'source-map';

export default config;
