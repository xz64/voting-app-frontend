function getPollListing({ axios, path }) {
  return axios.get('/polls')
  .then(response => path.success({ result: response.data }))
  .catch(error => {
    return path.error({ error: error.response.data });
  });
}

export default getPollListing;
