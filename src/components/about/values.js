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

    }

    return (
      <Container style={containerStyles} basic>
        <h4 style={headerTextStyles}>
          {t('values_title')}
        </h4>

        <h4 style={paragraphTextStyles}>
          {t('values_title')}
        </h4>

        <Grid stackable centered padded>
          <AboutValuesCard
            description={t('values_reliability_description')}
            iconName="reliability"
            title={t('values_reliability_title')}
          />
          <AboutValuesCard
            description={t('values_engagement_description')}
            iconName="engagement"
            title={t('values_engagement_title')}
          />
          <AboutValuesCard
            description={t('values_trust_description')}
            iconName="trust"
            title={t('values_trust_title')}
          />
        </Grid>
      </Container>
    )
  }
}

export default translate('about')(AboutValues);
