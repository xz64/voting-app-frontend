import { reduxForm } from 'redux-form';

import LoginFormView from './LoginFormView.jsx';

const LoginForm = reduxForm({
  form: 'test',
  fields: ['input1']
})(LoginFormView);

export default LoginForm;
