import React, { Component } from "react"
import { Grid } from "semantic-ui-react";

import Instruction from './shared/Instruction';

import sharedStyles from './shared.module.css';

class InstructionsAndroid extends Component {
  render() {
    return (
      <div className={sharedStyles.container}>
        <Grid>
          <Instruction number={1}>
            <p>
              Verify that you have a <strong>valid certificate</strong> and that encryption key words are clearly written down
            </p>
          </Instruction>
        </Grid>
      </div>
    )
  }
}

export default InstructionsAndroid;
