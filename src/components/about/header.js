import React, { Component } from "react"

import { Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import aboutHeaderStyles from './header.module.css';

class AboutHeader extends Component {
  render() {
    const { t } = this.props;

    return (
      <Grid className="container">
        <Grid.Column />
        <Grid.Column width={2}>
          <div className={aboutHeaderStyles.blueBar} />
        </Grid.Column>
        <Grid.Column width={7} >
          <h3 className={aboutHeaderStyles.headerText}>
            {t('header_title')}
          </h3>
          <p className={aboutHeaderStyles.paragraphText}>
            {t('header_paragraph')}
          </p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default translate('about')(AboutHeader);
