import React, { Component } from "react"

import { Container } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import newsletterStyles from './newsletter.module.css';

class HomeNewsletter extends Component {
  render() {
    const { t } = this.props;

    return (
      <Container className={newsletterStyles.container} basic>
        <p className={newsletterStyles.title}>
          {t('newsletter_title')}
        </p>
        <p className={newsletterStyles.subtitle}>
          {t('newsletter_subtitle')}
        </p>
      </Container>
    )
  }
}

export default translate('home')(HomeNewsletter);
