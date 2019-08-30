import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { graphql, StaticQuery, Link } from "gatsby"
import { translate } from "react-i18next"

class FooterConnectBanner extends Component {
  render() {
    const { data, t } = this.props;

    return (
      <Grid padded>
        <Grid.Column width={3} />
        <Grid.Column width={4}>
          <h3>
            {t('connect_with_us')} ->
          </h3>
        </Grid.Column>
        <Grid.Column width={6}>
          <Link to={data.site.siteMetadata.links.youtube} style={{ padding: 5 }}>
            YouTube
          </Link>
          <Link to={data.site.siteMetadata.links.telegram} style={{ padding: 5 }}>
            Telegram
          </Link>
          <Link to={data.site.siteMetadata.links.twitter} style={{ padding: 5 }}>
            Twitter
          </Link>
          <Link to={data.site.siteMetadata.links.reddit} style={{ padding: 5 }}>
            Reddit
          </Link>
          <Link to={data.site.siteMetadata.links.github} style={{ padding: 5 }}>
            Github
          </Link>
          <Link to={data.site.siteMetadata.links.steem} style={{ padding: 5 }}>
            Steem
          </Link>
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
