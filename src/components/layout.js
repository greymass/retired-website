import React, { Component } from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

import { graphql, StaticQuery } from "gatsby"
import { Helmet } from 'react-helmet';
import { translate } from 'react-i18next';

import LayoutHeader from './layout/header';
import LayoutFooter from './layout/footer';

import layoutStyles from './layout.module.css';

import 'semantic-ui-less/semantic.less';

class Layout extends Component {
  render() {
    const {
      containerClassName,
      children,
      data,
    } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <div className={(layoutStyles[containerClassName || 'greyBackground'])}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href="https://greymass.com" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Montserrat|Poppins|Roboto&display=swap"
            />
          </Helmet>
          <LayoutHeader>
            {children()}
          </LayoutHeader>
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

