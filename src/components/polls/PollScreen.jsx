import React, { Component } from 'react';
import { connect } from 'cerebral/react';

import PollView from './PollView.jsx';

const signalProps = {
  resetState: 'polls.resetState'
};

class PollScreen extends Component {
  render() {
    return (<PollView/>);
  }

  componentWillUnmount() {
    this.props.resetState();
  }
}

PollScreen.propTypes = {
  resetState: React.PropTypes.func
};

export default connect({}, signalProps, PollScreen);
