function removeAnswer({ state, input }) {
  var answers = state.get('polls.editingPoll.answers.value');
  var newAnswers = answers.slice();
  newAnswers.splice(input.index, 1);
  state.set('polls.editingPoll.answers.value', newAnswers);
  state.set('polls.editingPoll.answers.isPristine', false);
}

export default removeAnswer;
