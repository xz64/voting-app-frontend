import wentPoll from './chains/wentPoll.js';
import choseAnswer from './chains/choseAnswer.js';
import voted from './chains/voted.js';
import resetState from './chains/resetState.js';

export default {
  state: {
    currentPoll: {},
    currentAnswer: null,
    voteError: null,
    showVoteSuccess: false
  },
  signals: {
    wentPoll,
    choseAnswer,
    voted,
    resetState
  }
};
