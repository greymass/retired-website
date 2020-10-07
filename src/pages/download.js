import React, { Component } from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import VersionsDownload from "../components/download/download";
import VersionDifference from "../components/download/difference";
import SEO from "../components/shared/seo";

class Download extends Component {
  render() {
    const { intl, location } = this.props;

    return (
      <Layout location={location} containerClassName="anchor">
        <SEO lang={intl.locale} keywords={[`gatsby`, `application`, `react`]} />
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
