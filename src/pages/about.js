import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import AboutValues from '../components/about/values';
import AboutTeamMembers from '../components/about/teamMembers';
import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';
import SEO from '../components/shared/seo';

class About extends React.Component {
  render() {
    const { intl, location } = this.props;

    return (
      <Layout location={location}>
        <SEO
          lang={intl.locale}
          keywords={['about us', 'greymass']}
          title="About"
        />
        <SharedHeader
          title={intl.formatMessage({ id: 'about_header_title' })}
          paragraph={intl.formatMessage({ id: 'about_header_paragraph' })}
        />
        <AboutValues />
        <AboutTeamMembers />
      </Layout>
    )
  }
}

export default injectIntl(About);
