import React, { Component } from "react"

import { Container } from 'semantic-ui-react';


import newsletterStyles from './newsletter.module.css';

class HomeNewsletter extends Component {
  render() {
    return (
      <Container className={newsletterStyles.container}>
        <p className={newsletterStyles.title}>
          {'newsletter_title'}
        </p>
        <p className={newsletterStyles.subtitle}>
          {'newsletter_subtitle'}
        </p>
      </Container>
    )
  }
}

export default HomeNewsletter;
