function setMyPolls({ input, state }) {
  var polls = input.result;
  state.set('polls.myPolls', polls);
}

export default setMyPolls;
