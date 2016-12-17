function getPoll({ input, axios, path }) {
  return axios.get('/polls/' + input.id)
  .then(response => path.success({ result: response.data}))
  .catch(error => path.error({ error: error.response.data }));
}

export default getPoll;
