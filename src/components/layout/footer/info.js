import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { translate } from 'react-i18next';

import FooterInfoLink from './info/link';
import FooterInfoLanguageSwitcher from './info/languageSwitcher';

class FooterInfo extends Component {
  render() {
    const { data, t } = this.props;

    const containerStyles = {
      backgroundColor: '#343941',
      height: '300px',
      padding: '30px',
      paddingTop: '50px'
    };

    const copyrightStyles = {
      fontFamily: 'Font Awesome 5 Free',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.05em',
      lineHeight: '21px',
      marginTop: '8px',
      color: '#B6B6B6',
    };

    const dividerStyles = {
      color: 'white',
      fontSize: '20px',
      padding: '5px',
    }

    const contactInfoTextStyles = {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '25px',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'white',
      maxWidth: '300px',
    }

    return (
      <Grid style={containerStyles}>
        <Grid.Column width={6}>
          <div style={{ fontSize: '18px' }}>
            <FooterInfoLink to={`bp-info`} content={t('bp_info')} />
            <span style={dividerStyles}>|</span>
            <FooterInfoLink to={`code-of-conduct`} content={t('code_of_conduct')} />
            <span style={dividerStyles}>|</span>
            <FooterInfoLink to={`ownership`} content={t('ownership')} />
          </div>
          <div style={{ fontSize: '16px' }}>
            <FooterInfoLink to={`terms-of-use`} content={t('terms_of_use')} />
            <span style={dividerStyles}>|</span>
            <FooterInfoLink to={`privacy-policy`} content={t('privacy_policy')} />
          </div>
          <h4 style={copyrightStyles}>
            <span style={{ margin: '5px' }}>&#9400;</span>
            {t('copyright_text')}
          </h4>
        </Grid.Column>
        <Grid.Column
          floated="right"
          style={{ padding: '30px', paddingTop: '10px'}}
          width={4}
        >
          <h4 style={contactInfoTextStyles}>
            {t('email', { email: data.site.siteMetadata.officialEmail })}
          </h4>
          <h4 style={contactInfoTextStyles}>
            {t('address', { address: data.site.siteMetadata.officialAddress })}
          </h4>
          <div style={{ padding: '30px', paddingLeft: '80px' }}>
            <FooterInfoLanguageSwitcher />
          </div>
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
