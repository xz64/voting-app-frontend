import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'cerebral/react';

const stateProps = {
  userID: 'app.user.id',
  currentRoute: 'app.currentRoute'
};

const NavBar = ({ userID, currentRoute, t }) => (
  <div role='presentation' className='va-navbar-spacer'>
    <nav className='va-navbar'>
      <a className='va-navlink' href='/#/'>{t('HOME')}</a>
      <div className='va-spacer' role='presentation'/>
      {userID ? (<a className='va-navlink' href='/#/'>{userID}</a>) : null}
      {userID ?
          (<a className='va-navlink' href='/#/logout'>{t('LOGOUT')}</a>)
          : ((currentRoute === 'login') ?
            null
            : (<a className='va-navlink' href='/#/login'>{t('LOGIN')}</a>))}
      {/* TODO: only show hamburger icon when logged in
      <button type='button' styleName='hamburger'>&#x2261;</button>*/}
    </nav>
  </div>
);

NavBar.propTypes = {
  userID: React.PropTypes.string,
  currentRoute: React.PropTypes.string,
  t: React.PropTypes.func
};

export default connect(stateProps, {}, translate()(NavBar));
