import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

import NavBar from '../navigation/NavBar.jsx';

class AppScreen extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <LoadingBar/>
        <div>
          <div>
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
