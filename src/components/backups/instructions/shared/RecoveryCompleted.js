import React, { Component } from 'react';
import { Grid, Icon } from "semantic-ui-react";

import recoveryCompletedStyles from "./recoveryCompleted.module.css";

export default class Instruction extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column computer={1} tablet={1} mobile={2}>
          <Icon className={recoveryCompletedStyles.checkIcon} name="check circle" />
        </Grid.Column>
        <Grid.Column computer={15} tablet={15} mobile={14}>
          <strong>Recovery Completed</strong><br />
          <p>Continue keeping the owner key certificate safe</p>
        </Grid.Column>
      </Grid.Row>
    )
  }
}
