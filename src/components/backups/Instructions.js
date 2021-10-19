import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";

import IOSInstructions from "./instructions/IOS";
import AndroidInstructions from "./instructions/Android";
import DesktopInstructions from "./instructions/Desktop";

import instructionsStyles from "./instructions.module.css";
import backupStyles from "../../pages/account-recovery.module.css";
import accountRecoveryHeaderImage from "../../images/account-recovery-header-image.jpg";

const platforms = ['iOS', 'Android', 'Win/OSX/Linux']

export default class Instructions extends Component {
  state = { currentPlatform: 'iOS' };

  render() {
    const { currentPlatform } = this.state;

    return (
      <div className={instructionsStyles.container}>
        <Grid className={`tablet reversed computer reversed ${backupStyles.header}`}>
          <Grid.Column computer={6} tablet={6} mobile={16} floated="right">
            <Image
              alt='account-recovery-header-image'
              src={accountRecoveryHeaderImage}
              style={{ margin: 'auto', width: 400 }}
            />
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16} floated="left">
            <div className={instructionsStyles.headerTextContainer}>
              <h2 className={instructionsStyles.title}>Account recovery</h2>
              <p className={instructionsStyles.subtitle}>
                Follow these steps to recover your account
              </p>
              <p className={instructionsStyles.subtitle}>
                <strong >
                  Choose your platform for recovery
                </strong>
              </p>
              <div className={instructionsStyles.buttonsContainer}>
                {platforms.map(platform => (
                  <button
                    onClick={() => this.setState({currentPlatform: platform})}
                    className={currentPlatform === platform ? instructionsStyles.active : instructionsStyles.inactive}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </Grid.Column>
        </Grid>
        <div className={instructionsStyles.innerContainer}>
          <Grid>
            <Grid.Column computer={13} tablet={16} mobile={16}>
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
              <div className={instructionsStyles.warningBox}>
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
      </div>
    );
  }
}
