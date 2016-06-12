import React from 'react';
import { translate } from 'react-i18next';

class App extends React.Component {
  render() {
    let { t } = this.props;
    return (
      <div>
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

export default translate()(App);
