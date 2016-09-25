import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

import NavBar from '../navigation/NavBar.jsx';

class AppScreen extends React.Component {
  render() {
    return (
      <div className='c-text'>
        <NavBar/>
        <LoadingBar style={{backgroundColor: '#6ebaf7'}}/>
        <div className='u-center-block'>
          <div className={'u-center-block__content ' +
            'u-center-block__content--horizontal'}>
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


export default AppScreen;
