import { set, state } from 'cerebral/operators';

export default [
  set(state`polls.currentPoll`, {}),
  set(state`polls.currentAnswer`, null),
  set(state`polls.voteError`, null),
  set(state`polls.showVoteSuccess`, false)
];
