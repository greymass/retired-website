import React, { Component } from "react"
import { Grid } from "semantic-ui-react";

import Instruction from './shared/Instruction';

import sharedStyles from './shared.module.css';

class InstructionsIOS extends Component {
  render() {
    return (
      <div className={sharedStyles.container}>
        <Grid>
          <Instruction number={1}>
            <p>
              Verify that you have a <strong>valid certificate</strong> and that encryption key words are clearly written down
            </p>
          </Instruction>
          <Instruction number={2}>
            <p>
              Verify that you have a <strong>valid certificate</strong> and that encryption key words are clearly written down
            </p>
          </Instruction>
          <Instruction number={3}>
            <p>
              Verify that you have a <strong>valid certificate</strong> and that encryption key words are clearly written down
            </p>
          </Instruction>
          <Instruction number={4}>
            <p>
              Verify that you have a <strong>valid certificate</strong> and that encryption key words are clearly written down
            </p>
          </Instruction>
          <Instruction number={5}>
            <p>
              Verify that you have a <strong>valid certificate</strong> and that encryption key words are clearly written down
            </p>
          </Instruction>
        </Grid>
      </div>
    )
  }
}

export default InstructionsIOS;
