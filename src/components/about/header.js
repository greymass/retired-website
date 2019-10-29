import React, { Component } from "react"
import { Grid } from 'semantic-ui-react';
import { injectIntl } from "gatsby-plugin-intl";

import aboutHeaderStyles from './header.module.css';

class AboutHeader extends Component {
  render() {
    const { intl } = this.props;
    return (
      <Grid className="container">
        <Grid.Column />
        <Grid.Column width={2}>
          <div className={aboutHeaderStyles.blueBar} />
        </Grid.Column>
        <Grid.Column width={7} >
          <h3 className={aboutHeaderStyles.headerText}>
            {intl.formatMessage({ id: 'about_header_title' })}
          </h3>
          <p className={aboutHeaderStyles.paragraphText}>
            {intl.formatMessage({ id: 'about_header_paragraph' })}
          </p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default injectIntl(AboutHeader);
