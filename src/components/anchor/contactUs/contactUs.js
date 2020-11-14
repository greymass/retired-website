import React, { Component } from "react";

import { injectIntl } from "gatsby-plugin-intl";
import { Container } from "semantic-ui-react";
import contactStyles from "./contactUs.module.css";

class ContactUs extends Component {
  render() {
    const { intl } = this.props;

    return (
      <div id={contactStyles.containerFluid}>
        <Container className={contactStyles.container}>
          <h1>{intl.formatMessage({ id: "anchor_contact_header" })}</h1>
          <span>{intl.formatMessage({ id: "anchor_contact_subheading" })}</span>
          <a href="mailto:name@email.com">
            <button>{intl.formatMessage({ id: "anchor_contact_button" })}</button>
          </a>
        </Container>
      </div>
    );
  }
}

export default injectIntl(ContactUs);
