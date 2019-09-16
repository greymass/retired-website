import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { translate } from 'react-i18next';

import ConnectBannerLink from './connectBanner/link';

class FooterConnectBanner extends Component {
  render() {
    const { data, t } = this.props;

    const textStyle = {
      color: 'white',
      fontFamily: 'Poppins',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 500,
      letterSpacing: '0.02em',
      lineHeight: '54px',
      textAlign: 'center',
      textTransform: 'uppercase',
    };

    const containerStyle = {
      backgroundColor: '#0091E2',
      margin: 'auto',
      paddingBottom: '30px',
      paddingTop: '20px',
      width: '1000px',
    };

    return (
      <div style={{ backgroundColor: '#0091E2' }}>
        <Grid container style={containerStyle}>
          <Grid.Column width={8}>
            <h3 style={textStyle}>
              {t('connect_with_us')}
              <Icon
                name='arrow right'
                style={{ marginLeft: '12%' }}
              />
            </h3>
          </Grid.Column>
          <Grid.Column width={8} style={{ paddingTop: '30px' }}>
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
          </Grid.Column>
        </Grid>
      </div>
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
