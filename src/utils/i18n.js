import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'
import XHR from 'i18next-xhr-backend'

export const options = {
  fallbackLng: 'en',
  load: 'languageOnly',
  ns: ['shared'],
  defaultNS: 'shared',

  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    wait: true,
    nsMode: 'default',
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
}
// for browser use xhr backend to load translations and browser lng detector
i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init(options)

export default i18n;
