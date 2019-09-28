import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';

import sharedHeaderStyles from './header.module.css';

export default class SharedHeader extends Component {
  render() {
    const { title, paragraph } = this.props;

    return (
      <Grid container className={sharedHeaderStyles.container} basic>
        <Grid.Column computer={1} tablet={1} mobile={2}>
          <div className={`${sharedHeaderStyles.blueBar} ${
            paragraph ? sharedHeaderStyles.longBlueBar :  ''
          }`}/>
        </Grid.Column>
        <Grid.Column computer={10} tablet={10} mobile={13}>
          <h4 className={sharedHeaderStyles.headerText}>
            {title}
          </h4>
          <p className={sharedHeaderStyles.paragraphText}>
            {paragraph}
          </p>
        </Grid.Column>
      </Grid>
    )
  }
}
