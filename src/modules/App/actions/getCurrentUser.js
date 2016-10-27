function getCurrentUser({ services, output }) {
  services.http.get('/whoami')
  .then(output.success)
  .catch(output.error);
}

getCurrentUser.async = true;
getCurrentUser.outputs = ['success', 'error'];

export default getCurrentUser;
