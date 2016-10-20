import React from 'react';
import { translate } from 'react-i18next';

const Button = ({ t, item, onClick }) => (
  <div>
    <button className='c-button' type='button' onClick={onClick}>
      {t('click')}{item}
    </button>
  </div>
);

Button.propTypes = {
  t: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  item: React.PropTypes.number.isRequired
};

export default translate()(Button);
