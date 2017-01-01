function deletePoll({ input, axios, path }) {
  return axios.delete(`polls/${input.id}`)
  .then(response => path.success({ result: response.data}))
  .catch(error => path.error({ error: error.response.data }));
}

export default deletePoll;
