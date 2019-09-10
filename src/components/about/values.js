import React, { Component } from "react"

import { Container, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';

import AboutValuesCard from "./values/card"

class AboutValues extends Component {
  render() {
    const { t } = this.props;

    const containerStyles = {
      backgroundColor: 'white',
      textAlign: 'center',
      width: '100%',
      borderBottom: '2px solid #0091E2',
    };

    const headerTextStyles = {
      color: '#424954',
      fontFamily: 'Montserrat',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      padding: '40px',
    };

    const paragraphTextStyles = {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '34px',
      textAlign: 'center',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#424954',
      marginRight: '20%',
      marginLeft: '20%',
    }

    return (
      <Container style={containerStyles} basic>
        <h4 style={headerTextStyles}>
          {t('values_title')}
        </h4>

        <h4 style={paragraphTextStyles}>
          {t('values_description')}
        </h4>

        <Grid style={{ padding: '80px' }} stackable centered padded>
          <AboutValuesCard
            description={t('values_reliability_description')}
            iconName="thumbs up"
            title={t('values_reliability_title')}
          />
          <AboutValuesCard
            description={t('values_engagement_description')}
            iconName="comments"
            title={t('values_engagement_title')}
          />
          <AboutValuesCard
            description={t('values_trust_description')}
            iconName="handshake"
            title={t('values_trust_title')}
          />
        </Grid>
      </Container>
    )
  }
}

export default translate('about')(AboutValues);
