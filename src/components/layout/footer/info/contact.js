import React, { Component } from 'react';

import { graphql, StaticQuery } from 'gatsby';

import FooterContactInfoLanguageSwitcher from './contact/languageSwitcher';

import contactInfoStyles from './contact.module.css';

class FooterInfoContact extends Component {
  render() {
    // const { data } = this.props;
    return (
      <div className={contactInfoStyles.container}>
        <p className={contactInfoStyles.text}>
          {/* {t('email', { email: data.site.siteMetadata.officialEmail })} */}
        </p>
        <p className={contactInfoStyles.text}>
          {/* {t('address', { address: data.site.siteMetadata.officialAddress })} */}
        </p>
        <div className={contactInfoStyles.languageSwitcherContainer}>
          <FooterContactInfoLanguageSwitcher />
        </div>
      </div>
    )
  }
}

const FooterInfoContactWrapper = FooterInfoContact;

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
    render={data => <FooterInfoContactWrapper data={data} {...props} />}
  />
);
