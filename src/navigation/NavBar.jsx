import React, { PropTypes } from 'react';

import CSSModules from 'react-css-modules';
import styles from './NavBar.css';

const NavBar = (props) => (
  <nav>
    <ul styleName='navbar'>
      {props.children}
    </ul>
  </nav>
);

NavBar.propTypes = {
  children: PropTypes.node
};

export default CSSModules(NavBar, styles);
