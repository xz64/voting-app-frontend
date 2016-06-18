import React from 'react';
import styles from './App.css';
import CSSModules from 'react-css-modules';

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
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  t: React.PropTypes.func.isRequired,
  children: React.PropTypes.node
};

export default CSSModules(App, styles);
