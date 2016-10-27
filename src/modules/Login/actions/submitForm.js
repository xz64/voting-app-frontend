import toJSON from 'cerebral-module-forms/helpers/toJSON';

function submitForm({ state, services, output }) {
  const formValues = toJSON(state.get('login.form'));
  const payload = {
    username: formValues.userId,
    password: formValues.password
  };

  services.http.post('/login', payload)
  .then(output.success)
  .catch(output.error);
}

submitForm.async = true;
submitForm.outputs = ['success', 'error'];

export default submitForm;
