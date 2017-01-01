function setCurrentPollForEditing({ state, input }) {
  state.set('polls.editingPollId', input.id);
  state.set('polls.editingPoll.question.value', input.result.question);
  state.set('polls.editingPoll.answers.value',
    input.result.answers.map(x => x.text));
}

export default setCurrentPollForEditing;
