import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import styles from './NavItem.css';

const NavItem = (props) => (
  <Link styleName='link' to={props.path}>
    <li styleName='navitem'>{props.label}</li>
  </Link>
);

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CSSModules(NavItem, styles);
