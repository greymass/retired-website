import React, { Component } from 'react';
import { Grid } from "semantic-ui-react";
import instructionStyles from "./instruction.module.css";

export default class Instruction extends Component {
  render() {
    const { number } = this.props;

    return (
      <Grid.Row>
        <Grid.Column computer={1} tablet={1} mobile={2}>
          <div className={instructionStyles.number}>
            {number}
          </div>
        </Grid.Column>
        <Grid.Column computer={15} tablet={15} mobile={14}>
          {this.props.children}
        </Grid.Column>
      </Grid.Row>
    )
  }
}
