import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import { Image } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

import Layout from '../components/layout';
import SEO from '../components/shared/seo';

import Instructions from '../components/backups/Instructions';
import Explanation from '../components/backups/Explanation';

import accountRecoveryHeaderImage from "../images/account-recovery-header-image.jpg";

import backupStyles from './account-recovery.module.css';

class AccountRecovery extends Component {
  render() {
    const { intl, location } = this.props;

    return (
      <Layout containerClassName="anchor" location={location} >
        <SEO
          lang={intl.locale}
          keywords={['backups', 'greymass']}
          title="Backups"
        />
        <div className={backupStyles.container}>
          <Instructions />

          <div className={backupStyles.innerContainer}>
            <hr />
            <Explanation />
            <hr />
            <div className={backupStyles.advanced}>
              <h2 className={backupStyles.title}>Advanced</h2>

              <a href="https://github.com/greymass/keycert-js">
                JS implementation of the keycert library
              </a>

              <a href="https://github.com/greymass/keycert-js-pdf">
                Keycert PDF generation library
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(AccountRecovery);
