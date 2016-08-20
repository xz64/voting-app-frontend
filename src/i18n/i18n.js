import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import fr from './fr.json';

export default
  i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en,
      fr
    }
  });
