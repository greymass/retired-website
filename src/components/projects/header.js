import React, { Component } from "react"

import { Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import aboutHeaderStyles from './header.module.css';

class AboutHeader extends Component {
  render() {
    const { t } = this.props;

    return (
      <Grid container className={aboutHeaderStyles.container} basic>
        <Grid.Column>
          <div className={aboutHeaderStyles.blueBar} />
        </Grid.Column>
        <Grid.Column width={10} >
          <h4 className={aboutHeaderStyles.headerText}>
            {t('header_title')}
          </h4>
          <p className={aboutHeaderStyles.paragraphText}>
            {t('header_paragraph')}
          </p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default translate('projects')(AboutHeader);
