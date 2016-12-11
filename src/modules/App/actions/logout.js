function logout({ axios, path }) {
  return axios.post('/logout')
  .then(response => path.success({ result: response.data}))
  .catch(error => path.error({ error: error.response.data }));
}

export default logout;
