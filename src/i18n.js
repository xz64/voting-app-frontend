import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './i18n/en.json';
import fr from './i18n/fr.json';

export default i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en,
      fr
    }
  });
