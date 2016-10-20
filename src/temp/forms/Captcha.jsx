import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = (props) => (
  <div>
    {props.meta.touched && props.meta.error}
    <ReCAPTCHA
      sitekey={process.env.RECAPTCHA_SITE_KEY}
      onChange={props.input.onChange}
    />
    </div>
);

Captcha.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default Captcha;
