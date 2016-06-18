import React from 'react';

import InputText from './InputText.jsx';

const LoginFormView = ({ fields: { email, password } , handleSubmit,
  submitting }) => (
  <form onSubmit={handleSubmit}>
    <InputText formField={email} placeholder='Your email address' 
      forAttr='email' labelText='Email Address' type='text'/>
    <InputText formField={password} placeholder='*******' 
      forAttr='password' labelText='Password' type='password'/>
    <button type="submit" disabled={submitting}>
      {submitting ? 'Please wait...' : 'Submit'}
    </button>
  </form>    
);

LoginFormView.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
}

export default LoginFormView;
