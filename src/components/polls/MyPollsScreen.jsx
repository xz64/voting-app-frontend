import React from 'react';
import { connect } from 'cerebral/react';
import { translate } from 'react-i18next';

const stateProps = {
  polls: 'polls.myPolls'
};

function pollMap(poll) {
  return (
    <li key={poll.id}>
      <a href={'/#/editPoll/' + poll.id}>{poll.question}</a>
    </li>
  );
}

const MyPollsScreen = function({ t, polls }) {
  return (
    <div>
      <a href='/#/createNewPoll'>{t('CREATE_NEW_POLL')}</a>
      <ul>
        {polls.map(pollMap)}
      </ul>
    </div>
  );
};

MyPollsScreen.propTypes = {
  polls: React.PropTypes.array,
  t: React.PropTypes.func
};

export default connect(stateProps, {}, translate()(MyPollsScreen));
