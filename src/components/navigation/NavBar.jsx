import React from 'react';

const NavBar = () => (
  <div role='presentation' className='va-navbar-spacer'>
    <nav className='va-navbar'>
      <a className='va-navlink' href='/'>Home</a>
      <a className='va-navlink' href='/about'>About</a>
      <div className='va-spacer' role='presentation'/>
      <a className='va-navlink' href='/login'>Login</a>
      {/* TODO: only show hamburger icon when logged in
      <button type='button' styleName='hamburger'>&#x2261;</button>*/}
    </nav>
  </div>
);

export default NavBar;
