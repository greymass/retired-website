import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { translate } from 'react-i18next';

import FooterInfoLink from './info/link';
import FooterInfoLanguageSwitcher from './info/languageSwitcher';

import footerInfoStyles from './info.module.css';

class FooterInfo extends Component {
  render() {
    const { data, t } = this.props;

    return (
      <div className={footerInfoStyles.container}>
        <Grid container>
          <Grid.Column width={6}>
            <div>
              <FooterInfoLink to={`bp-info`} content={t('bp_info')} />
              <span className={footerInfoStyles.divider}>|</span>
              <FooterInfoLink to={`code-of-conduct`} content={t('code_of_conduct')} />
              <span className={footerInfoStyles.divider}>|</span>
              <FooterInfoLink to={`ownership`} content={t('ownership')} />
            </div>
            <div style={{ fontSize: '16px' }}>
              <FooterInfoLink to={`terms-of-use`} content={t('terms_of_use')} />
              <span className={footerInfoStyles.divider}>|</span>
              <FooterInfoLink to={`privacy-policy`} content={t('privacy_policy')} />
            </div>
            <h4 className={footerInfoStyles.copyright}>
              <span style={{ margin: '5px' }}>&#9400;</span>
              {t('copyright_text')}
            </h4>
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ padding: '30px', paddingTop: '10px'}}
            width={4}
          >
            <h4 className={footerInfoStyles.contactInfoText}>
              {t('email', { email: data.site.siteMetadata.officialEmail })}
            </h4>
            <h4 className={footerInfoStyles.contactInfoText}>
              {t('address', { address: data.site.siteMetadata.officialAddress })}
            </h4>
            <div className={footerInfoStyles.languageSwitcherContainer}>
              <FooterInfoLanguageSwitcher />
            </div>
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
