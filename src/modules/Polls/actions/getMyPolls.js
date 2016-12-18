function getMyPolls({ axios, path }) {
  return axios.get('/polls?mine=true')
  .then(response => path.success({ result: response.data }))
  .catch(error => path.error({ error: error.response.data }));
}

export default getMyPolls;
