import React, { Component } from 'react';
import { Grid } from "semantic-ui-react";
import instructionStyles from "./instruction.module.css";

export default class Instruction extends Component {
  render() {
    const { number } = this.props;

    return (
      <Grid.Row>
        <Grid.Column width={1}>
          <div className={instructionStyles.number}>
            {number}
          </div>
        </Grid.Column>
        <Grid.Column width={15}>
          {this.props.children}
        </Grid.Column>
      </Grid.Row>
    )
  }
}
