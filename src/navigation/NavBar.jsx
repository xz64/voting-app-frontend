import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div role='presentation'>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <div role='presentation'/>
      <Link to='login'>Login</Link>
      {/* TODO: only show hamburger icon when logged in
      <button type='button' styleName='hamburger'>&#x2261;</button>*/}
    </nav>
  </div>
);

export default NavBar;
