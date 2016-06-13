import React from 'react';

const LoginFormView = ({ fields: { input1 } , handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" {...input1}/>
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
