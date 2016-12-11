import React from 'react';

function generateErrorMessage(field) {
  let message = null;
  let result = null;
  if (!field.isPristine && field.isRequired && field.value === '') {
    message = field.requiredMessage;
  } else if (!field.isPristine && field.errorMessage) {
    message = field.errorMessage;
  }
  if (message) {
    result = (<div className='c-field--error'>{message}</div>);
  }
  return result;
}

export { generateErrorMessage };
