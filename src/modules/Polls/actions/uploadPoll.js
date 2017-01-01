function uploadPoll({ state, axios, path }) {
  var pollId = state.get('polls.editingPollId');
  var question = state.get('polls.editingPoll.question.value');
  var answers = state.get('polls.editingPoll.answers.value');
  var method = pollId ? axios.patch : axios.post;
  var endpoint = pollId ? `/polls/${pollId}` : '/polls';
  return method(endpoint, {
    question,
    answers
  })
  .then(response => path.success({ result: response.data}))
  .catch(error => path.error({ error: error.response.data }));
}

export default uploadPoll;
