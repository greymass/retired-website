import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { translate } from 'react-i18next';

import ConnectBannerLink from './connectBanner/link'

class FooterConnectBanner extends Component {
  render() {
    const { data, t } = this.props;

    return (
      <Grid style={{ backgroundColor: '#0091E2' }}>
        <Grid.Column width={3} />
        <Grid.Column width={4}>
          <h3>
            {t('connect_with_us')} ->
          </h3>
        </Grid.Column>
        <Grid.Column width={6}>
          <ConnectBannerLink
            to={data.site.siteMetadata.links.youtube}
            type={`youtube`}
          />
          <ConnectBannerLink
            to={data.site.siteMetadata.links.telegram}
            type={`telegram`}
          />
          <ConnectBannerLink
            to={data.site.siteMetadata.links.reddit}
            type={`reddit`}
          />
          <ConnectBannerLink
            to={data.site.siteMetadata.links.github}
            type={`github`}
          />
          <ConnectBannerLink
            to={data.site.siteMetadata.links.steem}
            type={`steem`}
          />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    )
  }
}

const FooterConnectBannerWrapper = translate('layout')(FooterConnectBanner);

export default props => (
  <StaticQuery
    query={graphql`
       query {
          site {
            siteMetadata {
              officialEmail
              links {
                youtube
                telegram
                twitter
                reddit
                github
                steem
              }
            }
          }
        }
    `}
    render={data => <FooterConnectBannerWrapper data={data} {...props} />}
  />
);
