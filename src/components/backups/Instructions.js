import React, { Component } from "react";

import backupStyles from "../../pages/backups.module.css";
import { Grid } from "semantic-ui-react";

import IOSInstructions from "./instructions/IOS";
import AndroidInstructions from "./instructions/Android";
import DesktopInstructions from "./instructions/Desktop";

import instructionStyles from "./instructions.module.css";

const platforms = ['iOS', 'Android', 'Win/OSX/Linux']

export default class Instructions extends Component {
  state = { currentPlatform: 'iOS' };

  render() {
    const { currentPlatform } = this.state;

    return (
      <div className={instructionStyles.steps}>
        <h2 className={instructionStyles.title}>Account recovery</h2>
        <p>
          Follow these steps to recover your account
        </p>
        <Grid>
          <Grid.Column computer={13} tablet={16} mobile={16}>
            <strong>
              Choose your platform for recovery
            </strong>
            <div className={instructionStyles.buttonsContainer}>
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
    );
  }
}
