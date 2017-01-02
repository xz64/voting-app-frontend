import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'cerebral/react';

const stateProps = {
  poll: 'polls.currentPoll',
  currentAnswer: 'polls.currentAnswer',
  voteError: 'polls.voteError',
  showVoteSuccess: 'polls.showVoteSuccess'
};

const signalProps = {
  onChoose: 'polls.choseAnswer',
  onVote: 'polls.voted'
};

class TranslatableAnswerField extends React.Component {
  constructor() {
    super();
    this._onChoose = this._onChoose.bind(this);
  }

  render() {
    let { answer, t } = this.props;
    return (
      <label className='c-field c-field--choice'>
        <input type='radio' name='answer' onChange={this._onChoose}/>
        {answer.text}
        {' ('}{t('VOTE_COUNT')}{answer.voteCount}{')'}
      </label>
    );
  }

  _onChoose() {
    this.props.onChoose({answer: this.props.answer.id});
  }
}

TranslatableAnswerField.propTypes = {
  answer: React.PropTypes.object,
  t: React.PropTypes.func,
  onChoose: React.PropTypes.func
};

const AnswerField = translate()(TranslatableAnswerField);

AnswerField.propTypes = {
  onChoose: React.PropTypes.func,
  answer: React.PropTypes.object
};

function makeTwitterURL(poll) {
  return 'https://twitter.com/intent/tweet'
    + `?text=${window.encodeURIComponent(poll.question)}`
    + `&url=${window.encodeURIComponent(window.location.href)}`;
}

const PollView = ({ poll, showVoteSuccess,
  onChoose, onVote, currentAnswer, voteError, t }) => (
  <div className='o-grid'>
    <div className='o-grid__cell'>
      {poll.question}
      <div>{t('SELECT_A_CHOICE')}</div>
      {poll && poll.answers && Object.keys(poll.answers).map(id => (
        <AnswerField key={id} onChoose={onChoose} answer={poll.answers[id]}/>
      ))}
      <button
        className='c-button c-button--brand' disabled={!currentAnswer}
        onClick={() => onVote()}>
        {t('VOTE')}
      </button>
      {voteError && <div className='u-color-red'>{t('S_' + voteError)}</div>}
      {showVoteSuccess &&
        <div className='u-color-green'>{t('VOTE_SUCCESS')}</div>}
        <a
          href={makeTwitterURL(poll)}
          target='_blank'
          style={{display: 'block', marginTop: '10px'}}
        >
          {t('SHARE_POLL_TO_TWITTER')}
        </a>
    </div>
  </div>
);

PollView.propTypes = {
  t: React.PropTypes.func,
  poll: React.PropTypes.object,
  currentAnswer: React.PropTypes.string,
  onChoose: React.PropTypes.func,
  onVote: React.PropTypes.func,
  voteError: React.PropTypes.string,
  showVoteSuccess: React.PropTypes.bool
};

export default connect(stateProps, signalProps, translate()(PollView));
