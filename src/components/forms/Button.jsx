import React from 'react';
import { translate } from 'react-i18next';
import CSSModules from 'react-css-modules';
import styles from './Button.css';

const Button = ({ t, item, onClick }) => (
  <div>
    <button type='button' styleName='button' onClick={onClick}>
      {t('click')}{item}
    </button>
  </div>
);

Button.propTypes = {
  t: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  item: React.PropTypes.number.isRequired
};

export default translate()(CSSModules(Button, styles));
