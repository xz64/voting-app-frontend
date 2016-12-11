import React from 'react';
import { translate } from 'react-i18next';

import PollListing from '../polls/PollListing.jsx';

const HomeScreen = ({ t }) => (
  <div>
    <h1>{t('WELCOME_TO_APP')}</h1>
    <div>{t('HERE_ARE_POLLS')}</div>
    <PollListing/>
  </div>
);

export default translate()(HomeScreen);
