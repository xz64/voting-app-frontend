import { formToJSON } from 'cerebral-forms';

function submitForm({ state, axios, path }) {
  const formValues = formToJSON(state.get('register.form'));
  const payload = {
    email: formValues.userId,
    password: formValues.password,
    captcharesponse: formValues.captcha
  };

  return axios.post('/register', payload)
  .then(response => path.success({ result: response.data}))
  .catch(error => path.error({ error: error.response.data }));
}

export default submitForm;
