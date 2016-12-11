import { isValidForm } from 'cerebral-forms';

function validateForm({ state, path }) {
  const isValid = isValidForm(state.get('login.form'));
  return path[isValid.toString()]();
}

export default validateForm;
