import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
import { Container } from 'semantic-ui-react';

import newsletterStyles from './newsletter.module.css';

class HomeNewsletter extends Component {
  render() {
    const { intl } = this.props;
    return (
      <Container className={newsletterStyles.container}>
        <p className={newsletterStyles.title}>
          {intl.formatMessage({ id: 'home_newsletter_title' })}
        </p>
        <p className={newsletterStyles.subtitle}>
          {intl.formatMessage({ id: 'home_newsletter_subtitle' })}
        </p>
        <iframe
          title="newsletter-iframe"
          width="100%"
          height="320"
          src="https://greymass.substack.com/embed"
          frameBorder="0"
          scrolling="no"
        />
      </Container>
    )
  }
}

export default injectIntl(HomeNewsletter);
