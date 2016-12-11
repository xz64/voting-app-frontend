function getCurrentUser({ axios, path }) {
  return axios.get('/whoami')
  .then(response => path.success({ result: response.data}))
  .catch(error => {
    return path.error({ error: error.response.data });
  });
}

export default getCurrentUser;
