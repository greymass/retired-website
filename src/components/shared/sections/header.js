import React, { Component } from 'react';

import { Container, Grid } from 'semantic-ui-react';

import sharedHeaderStyles from './header.module.css';

export default class SharedHeader extends Component {
  render() {
    const {
      extraRow,
      paragraph,
      title,
    } = this.props;

    return (
      <Container>
        <Grid className={sharedHeaderStyles.container}>
          <Grid.Row className={sharedHeaderStyles.row}>
            <Grid.Column computer={2} tablet={2} mobile={3}>
              <div className={`${sharedHeaderStyles.blueBar} ${
                paragraph ? sharedHeaderStyles.longBlueBar :  ''
              }`}/>
            </Grid.Column>
            <Grid.Column computer={10} tablet={12} mobile={13}>
              <h4 className={sharedHeaderStyles.headerText}>
                {title}
              </h4>
              <p className={sharedHeaderStyles.paragraphText}>
                {paragraph}
              </p>
            </Grid.Column>
          </Grid.Row>
          {extraRow}
        </Grid>
      </Container>
    )
  }
}
