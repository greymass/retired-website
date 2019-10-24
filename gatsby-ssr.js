import React from "react"
import { Provider } from "react-redux"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

const i18n = require('i18next');
const Backend = require('i18next-sync-fs-backend');

const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  i18n
    .use(Backend)
    .init({
      backend: {
        loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      },
      initImmediate: false,
      react: {
        wait: true,
      },
    })
    .loadNamespaces(['shared'], () => {
      const sheet = new ServerStyleSheet()
      const store = createStore()
      const app = () => (
        <Provider store={store}>
          <StyleSheetManager sheet={sheet.instance}>
            {bodyComponent}
          </StyleSheetManager>
        </Provider>
      )
      replaceBodyHTMLString(renderToString(bodyComponent))
      setHeadComponents([sheet.getStyleElement()])
    })
}

export default replaceRenderer;
