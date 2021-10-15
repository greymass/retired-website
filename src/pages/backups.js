import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import { Image } from "semantic-ui-react";

import Layout from '../components/layout';
import SEO from '../components/shared/seo';

import IOSInstructions from '../components/backups/instructions/IOS';
import AndroidInstructions from '../components/backups/instructions/Android';
import DesktopInstructions from '../components/backups/instructions/Desktop';

import backupsHeader from "../images/backups_header.jpg";

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
            </div>
            <hr />
            <div className={backupStyles.explanation}>
              <h2 className={backupStyles.title}>Certificate explanation</h2>
            </div>
            <div className={backupStyles.advanced}>
              <h2 className={backupStyles.title}>Advanced</h2>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Backups);
