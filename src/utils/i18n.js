import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

export const options = {
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  debug: true,
  defaultNS: 'shared',
  fallbackLng: 'en',
  ns: ['about', 'shared'],
  react: {
    wait: true,
  }
}

if (process.env.NODE_ENV === 'development') {
  const XHR = require('i18next-xhr-backend');
  i18n.use(XHR);
} else {
  const Backend = require('i18next-sync-fs-backend');
  i18n.use(Backend);
}

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init(options)

export default i18n;
