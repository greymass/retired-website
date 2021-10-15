import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import { Image } from "semantic-ui-react";

import Layout from '../components/layout';
import SEO from '../components/shared/seo';

import Instructions from '../components/backups/Instructions';
import Explanation from '../components/backups/Explanation';

import backupsHeader from "../images/backups_header.jpg";

import backupStyles from './backups.module.css';

class Backups extends Component {
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
          <div className={backupStyles.header}>
            <Image
              alt='backups-header-image'
              src={backupsHeader}
              style={{ margin: 'auto', width: 2000 }}
            />
          </div>

          <div className={backupStyles.innerContainer}>
            <Instructions />
            <hr />
            <Explanation />
            <hr />
            <div className={backupStyles.advanced}>
              <h2 className={backupStyles.title}>Advanced</h2>

              <a href="https://github.com/greymass/keycert-js">
                JS implementation of the keycert library
              </a>

              <a href="https://github.com/greymass/keycert-js">
                Keycert PDF generation library
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Backups);
