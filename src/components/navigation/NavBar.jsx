import React from 'react';
import { connect } from 'cerebral-view-react';

const stateProps = {
  userID: 'app.user.id',
  currentRoute: 'app.currentRoute'
};

const NavBar = ({ userID, currentRoute }) => (
  <div role='presentation' className='va-navbar-spacer'>
    <nav className='va-navbar'>
      <a className='va-navlink' href='/#/'>Home</a>
      <a className='va-navlink' href='/#/about'>About</a>
      <div className='va-spacer' role='presentation'/>
      {userID ? (<a className='va-navlink' href='/#/'>{userID}</a>) : null}
      {userID ?
          (<a className='va-navlink' href='/#/logout'>Logout</a>)
          : ((currentRoute === 'login') ?
            null
            : (<a className='va-navlink' href='/#/login'>Login</a>))}
      {/* TODO: only show hamburger icon when logged in
      <button type='button' styleName='hamburger'>&#x2261;</button>*/}
    </nav>
  </div>
);

NavBar.propTypes = {
  userID: React.PropTypes.string,
  currentRoute: React.PropTypes.string
};

export default connect(stateProps, {}, NavBar);
