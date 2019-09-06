import React, { Component } from "react"

import { Container } from 'semantic-ui-react';
import { translate } from 'react-i18next';

class HomeNewsletter extends Component {
  render() {
    const { t } = this.props;

    const containerStyles = {
      padding: '60px',
      minHeight: '500px'
    }

    const titleStyles = {
      fontFamily: 'Montserrat',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      margin: 'auto',
      marginBottom: '50px',
      maxWidth: '600px',
      textAlign: 'center',
      textTransform: 'uppercase',
    };
    const subtitleStyles = {
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.02em',
      lineHeight: '30px',
      textAlign: 'center',
      margin: '0',
    };

    return (
      <Container style={containerStyles} basic>
        <h4 style={titleStyles}>
          {t('newsletter_title')}
        </h4>
        <h4 style={subtitleStyles}>
          {t('newsletter_subtitle')}
        </h4>
      </Container>
    )
  }
}

export default translate('home')(HomeNewsletter);
