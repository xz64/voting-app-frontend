import createComponent from '../loading/AsyncComponentFactory.js';

export default createComponent(
  require('promise?global!./RegisterScreen.jsx'));
