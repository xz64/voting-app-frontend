import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './InputText.css';

const InputText = (props) => (
  <div styleName='formelement'>
    <label styleName='label' for={props.forAttr}>{props.labelText}</label>
    <input type={props.type || 'text'}
      styleName={props.styleName || 'inputtext'} {...props.formField}
      placeholder={props.placeholder || ''}/>
  </div>
);

InputText.propTypes = {
  styleName: PropTypes.string,
  placeholder: PropTypes.string,
  forAttr: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  formField: PropTypes.object,
  type: PropTypes.string
};

export default CSSModules(InputText, styles);
