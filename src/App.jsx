import React from 'react';
import { translate } from 'react-i18next';
import Button from './Button.jsx';

class App extends React.Component {
  render() {
    let { t } = this.props;
    return (
      <div>
        {t('greeting')}. This is the voting app.
        <Button/>
      </div>
    );
  }
}

export default translate()(App);
