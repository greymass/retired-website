import React, { Component } from "react"

import { I18nextProvider } from 'react-i18next';

import i18n from '../utils/i18n';

import { graphql, StaticQuery } from "gatsby"
import { Helmet } from "react-helmet";
import { Container } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import Header from './layout/Header';
import Footer from './layout/Footer';

import 'semantic-ui-less/semantic.less'

class Layout extends Component {
  render() {
    const { children, data, i18n: i18nObject } = this.props;

    const cleanedUpLocaleName = i18nObject.language.split('-')[0];

    return (
      <I18nextProvider i18n={i18n}>
        <Container basic>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <Header />
          <Container>
            {children(cleanedUpLocaleName)}
          </Container>
          <Footer />
        </Container>
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

