function incrementVoteCount({ state }) {
  var answer = state.get('polls.currentAnswer');
  var voteCountPath = `polls.currentPoll.answers.${answer}.voteCount`;
  var voteCount = state.get(voteCountPath);
  state.set(voteCountPath, voteCount + 1);
}

export default incrementVoteCount;
