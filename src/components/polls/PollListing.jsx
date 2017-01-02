import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'cerebral/react';

const stateProps = {
  polls: 'polls.polls'
};

const PollDisplay = translate()(({ poll, key }) => (
  <li className='c-list__item' key={key}>
    <a href={'/#/polls/' + poll.id}>{poll.question}</a>
  </li>
));

function pollMap(poll, index) {
  return <PollDisplay poll={poll} key={index}/>;
}

const PollListing = ({ polls }) => (
  <ul className='c-list'>
    {polls && polls.map(pollMap)}
  </ul>
);

PollListing.propTypes = {
  polls: React.PropTypes.array
};

export default connect(stateProps, {}, PollListing);
