import React, { PropTypes } from 'react';
import classNames from 'classnames';

const InputText = (props) => {
  const inputClasses = classNames('c-field', { 'c-field--error': props.meta.touched && props.meta.error });
  return (
    <div className='c-form-element'>
      <label className='c-label'>{props.labelText} {props.meta.touched && props.meta.error && <div className="c-text--loud">{props.meta.error}</div>}</label>
      <input className={inputClasses} type={props.type || 'text'} {...props.input}
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
  input: PropTypes.object
};

export default InputText;
