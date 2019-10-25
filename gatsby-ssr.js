const React = require('react');
const { renderToString } = require('react-dom/server');
const i18n = require('i18next');

const Backend = require('i18next-sync-fs-backend');
exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n
    .use(Backend)
    .init({
      initImmediate: false,
      backend: {
        loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      },
    })
=    .loadNamespaces(['shared'], () => {
      replaceBodyHTMLString(renderToString(bodyComponent))
    })
}
