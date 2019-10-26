import React, { Component } from 'react';

import { graphql, StaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';

import LayoutHeader from './layout/header';
import LayoutFooter from './layout/footer';

import layoutStyles from './layout.module.css';

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
      <div>
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
      </div>
    )
  }
}

// const LayoutWrapper = translate('layout')(Layout);

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
    render={data => <Layout data={data} {...props} />}
  />
);
