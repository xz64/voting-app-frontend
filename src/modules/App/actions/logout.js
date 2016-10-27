function logout({ services, output }) {
  services.http.post('/logout')
  .then(output.success)
  .catch(output.error);
}

logout.async = true;
logout.outputs = ['success', 'error'];

export default logout;
