import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './InputText.css';

const InputText = (props) => {
  const errorMsg = props.meta.touched && props.meta.error;
  return (
    <div styleName='formelement'>
      <label styleName='label' htmlFor={props.forAttr}>{props.labelText}</label>
      {props.hideError ? '' : errorMsg}
      <input type={props.type || 'text'}
        styleName={(!props.hideError && props.meta.touched && props.meta.error)
          ? 'inputtext--error' : 'inputtext'} {...props.input}
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

export default CSSModules(InputText, styles);
