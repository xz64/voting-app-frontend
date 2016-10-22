import React from 'react';
import classNames from 'classnames';

import { generateErrorMessage } from './helpers.js';

const InputText = (props) => {
  let inputClasses = classNames({
    'c-field': true,
    'c-field--error': props.field.errorMessage
  });

  let inputType = props.type || 'text';

  return (
    <div className='o-form-element'>
      <label className='c-label'>
        {props.label}
        {generateErrorMessage(props.field)}
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
