import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { generateErrorMessage } from './helpers.js';

function wrapChange(onChange) {
  return function(value) {
    onChange({ target: { value } });
  };
}

const Captcha = (props) => (
  <div className='o-form-element'>
    {generateErrorMessage(props.field)}
    <ReCAPTCHA
      sitekey={process.env.RECAPTCHA_SITE_KEY}
      onChange={wrapChange(props.onChange)}
    />
  </div>
);

Captcha.propTypes = {
  field: React.PropTypes.object,
  onChange: React.PropTypes.func
};

export default Captcha;
