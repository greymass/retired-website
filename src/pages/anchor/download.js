import React, { Component } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import image from '../../images/oganchor.png';

import Layout from "../../components/layout";
import VersionsDownload from "../../components/download/download";
import VersionDifference from "../../components/download/difference";
import SEO from "../../components/shared/seo";

class Download extends Component {
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
        <VersionsDownload />
        <VersionDifference />
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

export default injectIntl(Download);
