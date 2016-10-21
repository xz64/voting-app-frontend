import React from 'react';
import { connect } from 'cerebral-view-react';

import NavBar from '../navigation/NavBar.jsx';
import HomeScreen from '../home/HomeScreen.jsx';
import AboutScreen from '../about/AboutScreen.jsx';

const stateProps = {
  route: 'app.currentRoute'
};

function getRouteView(route) {
  switch(route) {
  case 'about':
    return AboutScreen;
  default:
    return HomeScreen;
  }
}

class AppScreen extends React.Component {
  render() {
    const RouteView = getRouteView(this.props.route);
    return (
      <div className='c-text'>
        <NavBar/>
        <RouteView/>
      </div>
    );
  }
}

AppScreen.propTypes = {
  route: React.PropTypes.string
};

export default connect(stateProps, {}, AppScreen);
