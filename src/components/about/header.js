import React, { Component } from "react"

import { Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';

class AboutHeader extends Component {
  render() {
    const { t } = this.props;

    const headerTextStyles = {
      fontFamily: 'Montserrat',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      maxWidth: '600px',
      marginBottom: 0,
      paddingBottom: '20px',
      paddingTop: '60px',
      textAlign: 'left',
      textTransform: 'uppercase',
    };
    const paragraphTextStyles = {
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.02em',
      lineHeight: '30px',
      margin: '0',
      marginBottom: '60px',
      textAlign: 'left',
    };
    const blueBarStyles = {
      backgroundColor: '#0091E2',
      float: 'right',
      height: '120px',
      marginTop: '60px',
      width: '10px',
    };

    return (
      <Grid style={{ marginTop: '40px', marginBottom: '50px' }} basic>
        <Grid.Column />
        <Grid.Column width={2}>
          <div style={blueBarStyles} />
        </Grid.Column>
        <Grid.Column width={7} >
          <h4 style={headerTextStyles}>
            {t('header_title')}
          </h4>
          <p style={paragraphTextStyles}>
            {t('header_paragraph')}
          </p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default translate('about')(AboutHeader);
