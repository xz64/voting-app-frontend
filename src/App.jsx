import React from 'react';
import { translate } from 'react-i18next';
import 'bootstrap';
import styles from './App.css';
import CSSModules from 'react-css-modules';

class App extends React.Component {
  render() {
    let { t } = this.props;
    return (
      <div styleName='main'>
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
