import isEmail from 'validator/lib/isEmail';

const validate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = 'Required';
  }

  if(!isEmail(values.email + '')) {
    errors.email = 'Please enter a valid email address';
  }

  if(!values.password) {
    errors.password = 'Required';
  }

  if((values.password + '').length < 15) {
    errors.password = 'Password must be at least 15 characters';
  }

  if(!values.repeatpassword) {
    errors.repeatpassword = 'Required';
  }

  if(values.password && values.repeatpassword
    && (values.password !== values.repeatpassword))
  {
    errors.password = 'Password and repeat password must match';
    errors.repeatpassword = 'Password and repeat password must match';
  }

  if(!values.captcharesponse) {
    errors.captcharesponse = 'Please confirm you are not a robot';
  }

  return errors;
};


export default validate;
