import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div role='presentation' className='va-navbar-spacer'>
    <nav className='va-navbar'>
      <Link className='va-navlink' to='/'>Home</Link>
      <Link className='va-navlink' to='about'>About</Link>
      <div className='va-spacer' role='presentation'/>
      <Link className='va-navlink' to='login'>Login</Link>
      {/* TODO: only show hamburger icon when logged in
      <button type='button' styleName='hamburger'>&#x2261;</button>*/}
    </nav>
  </div>
);

export default NavBar;
