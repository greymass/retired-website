import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { injectIntl } from "gatsby-plugin-intl";

import ConnectBannerLink from './connectBanner/link';
import footerConnectBannerStyles from './connectBanner.module.css';

class FooterConnectBanner extends Component {
  render() {
    const { data, intl } = this.props;

    return (
      <div className={footerConnectBannerStyles.container}>
        <Grid container className={footerConnectBannerStyles.grid} centered>
          <Grid.Column computer={8} tablet={6} mobile={16} >
            <p className={footerConnectBannerStyles.text}>
              {intl.formatMessage({ id: 'connect_with_us' })}
              <Icon
                name='arrow right'
                className={footerConnectBannerStyles.arrowIcon}
              />
            </p>
          </Grid.Column>
          <Grid.Column
            computer={8}
            tablet={10}
            mobile={15}
            className={`${
              footerConnectBannerStyles.connectBannerLinksContainer
            } ${
              footerConnectBannerStyles.gridColumn
            }`}
          >
            <div className={footerConnectBannerStyles.connectBannerLinksInnerContainer}>
              <ConnectBannerLink
                to={data.site.siteMetadata.links.youtube}
                type={`youtube`}
              />
              <ConnectBannerLink
                to={data.site.siteMetadata.links.telegram}
                type={`telegram plane`}
              />
              <ConnectBannerLink
                to={data.site.siteMetadata.links.twitter}
                type={`twitter`}
              />
              <ConnectBannerLink
                to={data.site.siteMetadata.links.reddit}
                type={`reddit alien`}
              />
              <ConnectBannerLink
                to={data.site.siteMetadata.links.github}
                type={`github alternate`}
              />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const FooterConnectBannerWrapper = injectIntl(FooterConnectBanner);

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
