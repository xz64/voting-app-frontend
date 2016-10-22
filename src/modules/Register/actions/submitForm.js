import toJSON from 'cerebral-module-forms/helpers/toJSON';

function submitForm({ state, services, output }) {
  const formValues = toJSON(state.get('register.form'));
  const payload = {
    email: formValues.userId,
    password: formValues.password,
    captcharesponse: formValues.captcha
  };

  services.http.post('/register', payload)
  .then(output.success)
  .catch(output.error);
}

submitForm.async = true;
submitForm.outputs = ['success', 'error'];

export default submitForm;
