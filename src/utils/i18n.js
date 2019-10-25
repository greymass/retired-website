import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'
import XHR from 'i18next-xhr-backend'

const options = {
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

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init(options)

export default {
  i18n,
  options,
};
