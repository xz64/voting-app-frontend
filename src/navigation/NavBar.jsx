import React from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './NavBar.css';

const NavBar = () => (
  <div role="presentation" styleName="navbar-spacer">
    <nav styleName='navbar'>
      <Link styleName='navlink' to='/'>Home</Link>
      <Link styleName='navlink' to='about'>About</Link>
      <div role="presentation" styleName="spacer"/>
      <Link styleName='navlink' to='login'>Login</Link>
      {/* TODO: only show hamburger icon when logged in
      <button type="button" styleName='hamburger'>&#x2261;</button>*/}
    </nav>
  </div>
);

export default CSSModules(NavBar, styles);
