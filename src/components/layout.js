import React, { Component } from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

import { graphql, StaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';
import { translate } from 'react-i18next';

import LayoutHeader from './layout/header';
import LayoutFooter from './layout/footer';

import layoutStyles from './layout.module.css';

import 'semantic-ui-less/semantic.less';

import { Sidebar } from 'semantic-ui-react';

class Layout extends Component {
  render() {
    const {
      children,
      data,
    } = this.props;

    let {
      containerClassName
    } = this.props;

    containerClassName = containerClassName || 'greyBackground';
    return (
      <I18nextProvider i18n={i18n.i18n}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://greymass.com" />
        </Helmet>
        <Sidebar.Pushable className={(layoutStyles[containerClassName])}>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </Sidebar.Pushable>
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
        desktopImage: file(relativePath: { eq: "images/paper-bg-desktop.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
  			mobileImage: file(relativePath: { eq: "images/paper-bg-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <LayoutWrapper data={data} {...props} />}
  />
);
