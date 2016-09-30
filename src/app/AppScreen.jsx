import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { AbsoluteFragment, RelativeFragment as Fragment }
  from 'redux-little-router';

import NavBar from '../navigation/NavBar.jsx';
import AsyncLoginContainer from '../login/AsyncLoginContainer.jsx';
import AsyncHomeScreen from '../home/AsyncHomeScreen.jsx';
import AsyncRegisterScreen from '../register/AsyncRegisterScreen.jsx';
import AsyncAboutScreen from '../about/AsyncAboutScreen.jsx';

class AppScreen extends React.Component {
  render() {
    return (
      <div className='c-text'>
        <NavBar/>
        <LoadingBar style={{backgroundColor: '#6ebaf7'}}/>
        <div className='u-center-block'>
          <div className={'u-center-block__content ' +
            'u-center-block__content--horizontal'}>
            <AbsoluteFragment forRoute='/'>
              <AsyncHomeScreen/>
            </AbsoluteFragment>
            <Fragment forRoute='/login'>
              <AsyncLoginContainer/>
            </Fragment>
            <Fragment forRoute='/register'>
              <AsyncRegisterScreen/>
            </Fragment>
            <Fragment forRoute='/about'>
              <AsyncAboutScreen/>
            </Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default AppScreen;
