import React from 'react';
import { translate } from 'react-i18next';
import styles from './App.css';
import CSSModules from 'react-css-modules';

import NavBar from './components/navigation/NavBar.jsx';
import NavItem from './components/navigation/NavItem.jsx';

class App extends React.Component {
  render() {
    let { t } = this.props;
    return (
      <div styleName='main'>
        <NavBar>
          <NavItem label='Home' path='/'/>
          <NavItem label='About' path='about'/>
        </NavBar>
        {t('greeting')}. This is the voting app.
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  t: React.PropTypes.func.isRequired,
  children: React.PropTypes.node
};

export default translate()(CSSModules(App, styles));
