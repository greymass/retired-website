import React, { Component } from "react"

import { Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';

class AboutHeader extends Component {
  render() {
    const { data, t } = this.props;

    const headerTextStyles = {
      fontFamily: 'Montserrat',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      margin: 'auto',
      paddingTop: '60px',
      paddingBottom: '20px',
      maxWidth: '600px',
      textAlign: 'center',
      textTransform: 'uppercase',
    };
    const paragraphTextStyles = {
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.02em',
      lineHeight: '30px',
      textAlign: 'center',
      margin: '0',
    };
    const blueBarStyles = {
      backgroundColor: '#0091E2',
    };

    return (
      <Grid style={{ paddingBottom: '50px' }} basic>
        <Grid.Column />
        <Grid.Column>
          <div style={blueBarStyles} />
        </Grid.Column>
        <Grid.Column width={9} >
          <h4 style={headerTextStyles}>
            {t('header')}
          </h4>
          <p style={paragraphTextStyles}>
            {t('paragraph')}
          </p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default translate('about')(AboutHeader);
