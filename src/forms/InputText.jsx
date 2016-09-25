import React, { PropTypes } from 'react';

const InputText = (props) => {
  return (
    <div className='c-form-element'>
      <label className='c-label'>{props.labelText}</label>
      <input className='c-field' type={props.type || 'text'} {...props.input}
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
