import React, { Component } from "react"

import { I18nextProvider } from 'react-i18next';

import i18n from '../utils/i18n';

import { graphql, StaticQuery } from "gatsby"
import { Helmet } from "react-helmet";
import { Container } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import LayoutHeader from './layout/header';
import LayoutFooter from './layout/footer';

import 'semantic-ui-less/semantic.less'

class Layout extends Component {
  render() {
    const { children, data, i18n: i18nObject } = this.props;

    const cleanedUpLocaleName = i18nObject.language.split('-')[0];

    return (
      <I18nextProvider i18n={i18n}>
        <div style={{ backgroundColor: '#F4F4F4' }}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href="https://greymass.com" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Montserrat|Poppins|Roboto&display=swap"
            />
          </Helmet>
          <Container basic>
            <LayoutHeader />
          </Container>
          {children(cleanedUpLocaleName)}
        </div>
        <LayoutFooter />
      </I18nextProvider>
    )
  }
}

const LayoutWrapper = translate('layout')(Layout);

export default props => (
  <StaticQuery
    query={graphql`
      query {
          site {
            siteMetadata {
              officialEmail
            }
          }
        }
    `}
    render={data => <LayoutWrapper data={data} {...props} />}
  />
);

