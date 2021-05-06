import React, { Component } from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import AnchorHeader from "../components/anchor/header/header";
import SEO from "../components/shared/seo";
import image from '../images/oganchor.png';

import { graphql } from "gatsby";
import Anchor from "../components/anchor/anchor/anchor";
import Versions from "../components/anchor/versions/versions";
import ContactUs from "../components/anchor/contactUs/contactUs";
import GetStarted from "../components/anchor/getStarted/getStarted";

class AnchorPage extends Component {
  render() {
    const { intl, location } = this.props;

    return (
      <Layout location={location} containerClassName="anchor">
        <SEO
          lang={intl.locale}
          image={image}
          keywords={[
            "anchor",
            "wallet",
            "eosio",
            "mobile",
            "desktop",
            "eos",
            "wax",
            "lynx",
            "telos",
            "greymass",
          ]}
          title="Anchor Wallet for Desktop and Mobile"
        />
        <AnchorHeader />
        <Anchor />
        <Versions />
        <ContactUs />
        <GetStarted />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        localesWithBlog
      }
    }
  }
`;

export default injectIntl(AnchorPage);
