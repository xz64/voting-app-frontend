function addAnswer({ state }) {
  var answers = state.get('polls.editingPoll.answers.value');
  state.set('polls.editingPoll.answers.value', answers.concat(['']));
  state.set('polls.editingPoll.answers.isPristine', false);
}

export default addAnswer;
