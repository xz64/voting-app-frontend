import React from 'react';
import { translate } from 'react-i18next';
import CSSModules from 'react-css-modules';
import styles from './button.css';

const Button = ({ t, item, onClick }) => (
  <div>
    <button type='button' styleName='button' onClick={onClick}>{t('click')}{item}</button>
  </div>
);

export default translate()(CSSModules(Button, styles));
