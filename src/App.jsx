import React from 'react';
import CSSModules from 'react-css-modules';
import LoadingBar from 'react-redux-loading-bar';

import styles from './App.css';
import NavBar from './components/navigation/NavBar.jsx';
import NavItem from './components/navigation/NavItem.jsx';

class App extends React.Component {
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

App.propTypes = {
  children: React.PropTypes.node
};

export default CSSModules(App, styles);
