import React from 'react';
import { connect } from 'cerebral/react';

import NavBar from '../navigation/NavBar.jsx';
import HomeScreen from '../home/HomeScreen.jsx';
import RegisterScreen from '../register/RegisterScreen.jsx';
import LoginScreen from '../login/LoginScreen.jsx';
import PollScreen from '../polls/PollScreen.jsx';
import MyPollsScreen from '../polls/MyPollsScreen.jsx';
import PollCreateScreen from '../polls/PollCreateScreen.jsx';

const stateProps = {
  route: 'app.currentRoute'
};

function getRouteView(route) {
  switch(route) {
  case 'register':
    return RegisterScreen;
  case 'login':
    return LoginScreen;
  case 'poll':
    return PollScreen;
  case 'myPolls':
    return MyPollsScreen;
  case 'createNewPoll':
  case 'editPoll':
    return PollCreateScreen;
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
