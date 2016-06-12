import React from 'react';
import { translate } from 'react-i18next';
import ButtonContainer from './ButtonContainer.jsx';

class App extends React.Component {
  render() {
    let { t } = this.props;
    return (
      <div>
        {t('greeting')}. This is the voting app.
        <ButtonContainer/>
      </div>
    );
  }
}

export default translate()(App);
