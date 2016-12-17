function setCurrentPoll({ state, input }) {
  let poll = input.result;
  let statePoll = Object.assign({}, poll);
  let answers = {};
  for (let i = 0; i < poll.answers.length; i++) {
    answers[poll.answers[i].id] = poll.answers[i];
  }
  statePoll.answers = answers;
  state.set('polls.currentPoll', statePoll);
}

export default setCurrentPoll;
