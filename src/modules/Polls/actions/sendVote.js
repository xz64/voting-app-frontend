function sendVote({ state, axios, path }) {
  var pollId = state.get('polls.currentPoll.id');
  var answerId = state.get('polls.currentAnswer');
  return axios.post('/polls/' + pollId + '/vote/' + answerId)
  .then(response => path.success({ result: response.data}))
  .catch(error => path.error({ error: error.response.data }));
}

export default sendVote;
