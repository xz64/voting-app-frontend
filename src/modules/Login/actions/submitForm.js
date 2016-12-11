import { formToJSON } from 'cerebral-forms';

function submitForm({ state, axios, path }) {
  const formValues = formToJSON(state.get('login.form'));
  const payload = {
    username: formValues.userId,
    password: formValues.password
  };

  return axios.post('/login', payload)
  .then(response => path.success({ result: response.data}))
  .catch(error => path.error({ error: error.response.data }));
}

export default submitForm;
