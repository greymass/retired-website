import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";

import IOSInstructions from "./instructions/IOS";
import AndroidInstructions from "./instructions/Android";
import DesktopInstructions from "./instructions/Desktop";

import accountRecoveryHeaderImage from "../../images/account-recovery-header-image.jpg";

import instructionsStyles from "./instructions.module.css";

const platforms = ['iOS', 'Android', 'Win/OSX/Linux']

export default class Instructions extends Component {
  state = { currentPlatform: 'iOS' };

  render() {
    const { currentPlatform } = this.state;

    return (
      <div className={instructionsStyles.container}>
        <div className={instructionsStyles.header}>
          <div className={instructionsStyles.headerContent}>
            <Grid className="tablet reversed computer reversed">
              <Grid.Column computer={10} tablet={10} mobile={16}>
                <Image
                  alt='account-recovery-header-image'
                  src={accountRecoveryHeaderImage}
                  style={{ margin: 'auto', width: 400 }}
                />
              </Grid.Column>
              <Grid.Column computer={6} tablet={6} mobile={16}>
                <div className={instructionsStyles.headerTextContainer}>
                  <h2 className={instructionsStyles.title}>Account recovery</h2>
                  <p className={instructionsStyles.subtitle}>
                    Follow these steps to recover your account
                  </p>
                  <br/>
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
          </div>
        </div>
        <div className={instructionsStyles.innerContainer}>
          <Grid>
            <Grid.Column computer={12} tablet={16} mobile={16}>
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
            <Grid.Column computer={4} tablet={16} mobile={16}>
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
