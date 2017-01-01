import React, { Component }from 'react';
import { connect } from 'cerebral/react';
import { translate } from 'react-i18next';

const stateProps = {
  polls: 'polls.myPolls'
};

const signalProps = {
  onDelete: 'polls.deletedPoll'
};

class TranslatablePollItem extends Component {
  constructor(props) {
    super(props);
    this._onDelete = this._onDelete.bind(this);
  }

  _onDelete() {
    this.props.onDelete({ id: this.props.poll.id});
  }

  render() {
    let { t, poll } = this.props;
    return (
      <li key={poll.id}>
        <a href={'/#/editPoll/' + poll.id}>
          {poll.question}
        </a>
        {'\u00a0'}
        <a href='/#/myPolls' onClick={this._onDelete}>{t('DELETE')}</a>
      </li>
    );
  }
}

TranslatablePollItem.propTypes = {
  t: React.PropTypes.func,
  onDelete: React.PropTypes.func,
  poll: React.PropTypes.object,
};

const PollItem = translate()(TranslatablePollItem);

function pollMap(poll, index) {
  return (
    <PollItem key={index} poll={poll} onDelete={this}/>
  );
}

const MyPollsScreen = function({ t, polls, onDelete }) {
  return (
    <div>
      <a href='/#/createNewPoll'>{t('CREATE_NEW_POLL')}</a>
      <ul>
        {polls.map(pollMap, onDelete)}
      </ul>
    </div>
  );
};

MyPollsScreen.propTypes = {
  polls: React.PropTypes.array,
  t: React.PropTypes.func,
  onDelete: React.PropTypes.func
};

export default connect(stateProps, signalProps, translate()(MyPollsScreen));
