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

  let input = (
    <input
      type={inputType}
      className={inputClasses}
      onChange={props.onChange}
    />
  );

  if (props.useValue) {
    input = (
      <input
        value={props.field.value}
        type={inputType}
        className={inputClasses}
        onChange={props.onChange}
      />
    );
  }

  return (
    <div className='o-form-element'>
      <label className='c-label'>
        {props.label}
        {errorMessage}
      </label>
      {input}
    </div>
  );
};

InputText.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  onChange: React.PropTypes.func,
  field: React.PropTypes.object,
  useValue: React.PropTypes.bool
};

export default InputText;
