import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { graphql, Link, StaticQuery } from "gatsby"
import { translate } from "react-i18next"

class FooterInfo extends Component {
  render() {
    const { data, t } = this.props;

    return (
      <div>
        <Grid>
          <Grid.Column width={6}>
            <Link to="#bp-info" style={{ margin: 5 }}>
              {t('bp_info')}
            </Link>
            <Link to="#code-of-conduct" style={{ margin: 5 }}>
              {t('code_of_conduct')}
            </Link>
            <Link to="#ownership" style={{ margin: 5 }}>
              {t('ownership')}
            </Link>
            <Link to="#terms-of-use" style={{ margin: 5 }}>
              {t('terms_of_use')}
            </Link>
            <Link to="#privacy-policy" style={{ margin: 5 }}>
              {t('privacy_policy')}
            </Link>
            <h4>
              {t('copyright_text')}
            </h4>
          </Grid.Column>
          <Grid.Column width={10}>
            <h4>{data.site.siteMetadata.officialEmail}</h4>
            <h4>{data.site.siteMetadata.officialAddress}</h4>
          </Grid.Column>
        </Grid>
      </div>
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
