import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { translate } from 'react-i18next';

import FooterInfoLink from './info/link';

class FooterInfo extends Component {
  render() {
    const { data, t } = this.props;

    const containerStyle={
      backgroundColor: '#343941'
    }

    return (
      <Grid style={containerStyle}>
        <Grid.Column width={6}>
          <FooterInfoLink to={`bp-info`} content={t('bp_info')} />
          <FooterInfoLink to={`code-of-conduct`} content={t('code_of_conduct')} />
          <FooterInfoLink to={`ownership`} content={t('ownership')} />
          <FooterInfoLink to={`terms-of-use`} content={t('terms_of_use')} />
          <FooterInfoLink to={`privacy-policy`} content={t('privacy_policy')} />

          <h4>
            {t('copyright_text')}
          </h4>
        </Grid.Column>
        <Grid.Column width={10}>
          <h4>{data.site.siteMetadata.officialEmail}</h4>
          <h4>{data.site.siteMetadata.officialAddress}</h4>
        </Grid.Column>
      </Grid>
    )
  }
}

const FooterInfoWrapper = translate('layout')(FooterInfo);

export default props => (
  <StaticQuery
    query={graphql`
      query {
          site {
            siteMetadata {
              officialEmail
              officialAddress
            }
          }
        }
    `}
    render={data => <FooterInfoWrapper data={data} {...props} />}
  />
);
