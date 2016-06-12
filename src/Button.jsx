import React from 'react';
import { translate } from 'react-i18next';
import CSSModules from 'react-css-modules';
import styles from './button.css';

const Button = ({ t }) => (
  <div>
    <button type='button' styleName='button'>{t('click')}</button>
  </div>
);

export default translate()(CSSModules(Button, styles));
