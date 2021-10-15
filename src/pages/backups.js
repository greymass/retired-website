import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import { Image, Grid } from "semantic-ui-react";

import Layout from '../components/layout';
import SEO from '../components/shared/seo';

import IOSInstructions from '../components/backups/instructions/IOS';
import AndroidInstructions from '../components/backups/instructions/Android';
import DesktopInstructions from '../components/backups/instructions/Desktop';

import backupsHeader from "../images/backups_header.jpg";
import keyCertificate from "../images/key_certificate.png";

import backupStyles from './backups.module.css';

const platforms = ['iOS', 'Android', 'Win/OSX/Linux']

class Backups extends Component {
  state = {
    currentPlatform: 'iOS',
  };

  render() {
    const { intl } = this.props;
    const { currentPlatform } = this.state;

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
              style={{ margin: 'auto', width: 1200 }}
            />
          </div>

          <div className={backupStyles.innerContainer}>
            <div className={backupStyles.steps}>
              <h2 className={backupStyles.title}>Account recovery</h2>
              <p>
                Follow these steps to recover your account
              </p>
              <Grid>
                <Grid.Column computer={13} tablet={16} mobile={16}>
                  <strong>
                    Choose your platform for recovery
                  </strong>
                  <div className={backupStyles.buttonsContainer}>
                    {platforms.map(platform => (
                      <button
                        onClick={() => this.setState({currentPlatform: platform})}
                        className={currentPlatform === platform ? backupStyles.active : backupStyles.inactive}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>

                  {currentPlatform === 'iOS' && (
                    <IOSInstructions />
                  )}

                  {currentPlatform === 'Android' && (
                    <AndroidInstructions />
                  )}

                  {currentPlatform === 'Win/OSX/Linux' && (
                    <DesktopInstructions />
                  )}
                </Grid.Column>
                <Grid.Column computer={3} tablet={16} mobile={16}>
                  <div className={backupStyles.warningBox}>
                    <strong>
                      Did you know?
                    </strong>
                    <br /><br />
                    <p>
                      This process can be used to setup your account on multiple devices securely or revoke all device keys if you have lost access to any devices
                    </p>
                  </div>
                </Grid.Column>
              </Grid>
            </div>
            <hr />
            <div className={backupStyles.explanation}>
              <h2 className={backupStyles.title}>Certificate explanation</h2>
              <div className={backupStyles.mobileExplanation}>

              </div>
              <Image
                alt='backups-header-image'
                src={keyCertificate}
                style={{ width: 400 }}
              />
              <div className={backupStyles.keyCertificateLayover}>

              </div>
              <div className={backupStyles.keyCertificateArrowExplanations}>

              </div>
            </div>
            <div className={backupStyles.advanced}>
              <h2 className={backupStyles.title}>Advanced</h2>

              <a href="https://github.com/greymass/keycert-js">
                JS implementation of our keycert library
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
