import { reduxForm } from 'redux-form';

import LoginFormView from './LoginFormView.jsx';

const LoginForm = reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginFormView);

export default LoginForm;
