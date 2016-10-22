import isValidForm from 'cerebral-module-forms/helpers/isValidForm';

function validateForm({ state, output }) {
  const isValid = isValidForm(state.get('register.form'));
  output[isValid.toString()]();
}

validateForm.outputs = ['true', 'false'];

export default validateForm;
