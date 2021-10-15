import React, { Component } from "react";

import { graphql, StaticQuery } from "gatsby";

import { Helmet } from "react-helmet";

import LayoutHeader from "./layout/header";
import LayoutFooter from "./layout/footer";

import layoutStyles from "./layout.module.css";

class Layout extends Component {
  render() {
    const { children, data, location,  } = this.props;

    let { containerClassName } = this.props;

    containerClassName = containerClassName || "greyBackground";

    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://greymass.com" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
            integrity="sha256-9mbkOfVho3ZPXfM7W8sV2SndrGDuh7wuyLjtsWeTI1Q="
            crossorigin="anonymous"
          />
        </Helmet>
        <div className={layoutStyles[containerClassName]}>
          <LayoutHeader location={location} />
          {children}
          <LayoutFooter />
        </div>
      </React.Fragment>
    );
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
        desktopImage: file(
          relativePath: { eq: "images/paper-bg-desktop.jpg" }
        ) {
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
