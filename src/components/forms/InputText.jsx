import React from 'react';
import classNames from 'classnames';

import { generateErrorMessage } from './helpers.js';

const InputText = (props) => {
  let errorMessage = generateErrorMessage(props.field);
  let inputClasses = classNames({
    'c-field': true,
    'c-field--error': errorMessage
  });

  let inputType = props.type || 'text';

  return (
    <div className='o-form-element'>
      <label className='c-label'>
        {props.label}
        {errorMessage}
      </label>
      <input
        type={inputType}
        className={inputClasses}
        onChange={props.onChange}
      />
    </div>
  );
};

InputText.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  onChange: React.PropTypes.func,
  field: React.PropTypes.object
};

export default InputText;
