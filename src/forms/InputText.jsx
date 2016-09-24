import React, { PropTypes } from 'react';

const InputText = (props) => {
  return (
    <div>
      <label>{props.labelText}</label>
      <input type={props.type || 'text'} {...props.input}
        placeholder={props.placeholder || ''}/>
    </div>
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string,
  forAttr: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object,
  hideError: PropTypes.bool
};

export default InputText;
