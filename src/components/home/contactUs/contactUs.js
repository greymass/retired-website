import React, { Component } from "react";

import { injectIntl } from "gatsby-plugin-intl";
import { Container } from "semantic-ui-react";
import contactStyles from "./contactUs.module.css";

class ContactUs extends Component {
  render() {
    const { intl } = this.props;

    return (
      <div className={contactStyles.containerFluid}>
        <Container className={contactStyles.container}>
          <h1>{intl.formatMessage({ id: "home_contact_header" })}</h1>
          <span>{intl.formatMessage({ id: "home_contact_subheading" })}</span>
          <button>{intl.formatMessage({ id: "home_contact_button" })}</button>
        </Container>
      </div>
    );
  }
}

export default injectIntl(ContactUs);
