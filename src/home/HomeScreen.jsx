import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './HomeScreen.css';

const HomeScreen = () => (
  <div>
    <h1 styleName='center'>Welcome to the Voting App!</h1>
  </div>
);

export default CSSModules(HomeScreen, styles);
