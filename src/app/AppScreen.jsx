import React from 'react';
import CSSModules from 'react-css-modules';
import LoadingBar from 'react-redux-loading-bar';

import styles from './AppScreen.css';
import NavBar from '../navigation/NavBar.jsx';
import NavItem from '../navigation/NavItem.jsx';

class AppScreen extends React.Component {
  render() {
    return (
      <div styleName='main'>
        <NavBar>
          <NavItem label='Home' path='/'/>
          <NavItem label='About' path='about'/>
          <NavItem label='Login' path='login'/>
        </NavBar>
        <LoadingBar styleName='loading'/>
        <div styleName='center-block'>
          <div styleName='center-horizontal'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

AppScreen.propTypes = {
  children: React.PropTypes.node
};

export default CSSModules(AppScreen, styles);
