import React, { Component } from "react";

import { injectIntl } from "gatsby-plugin-intl";
import { Container } from "semantic-ui-react";
import contactStyles from "./contactUs.module.css";
import { graphql, StaticQuery } from "gatsby"

class ContactUs extends Component {
  render() {
    const {
      intl,
      data: {
        site: {
          siteMetadata: {
            links: {
              devForums: devForumsLink,
            }
          }
        }
      }
    } = this.props;

    return (
      <div id={contactStyles.containerFluid}>
        <Container className={contactStyles.container}>
          <h1>{intl.formatMessage({ id: "anchor_contact_header" })}</h1>
          <span>{intl.formatMessage({ id: "anchor_contact_subheading" })}</span>
          <a href={devForumsLink}>
            <button>{intl.formatMessage({ id: "anchor_contact_button" })}</button>
          </a>
        </Container>
      </div>
    );
  }
}

const ContactUsWrapper = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            links {
              devForums
            }
          }
        }
      }
    `}
    render={data => <ContactUs data={data} {...props} />}
  />
);

export default injectIntl(ContactUsWrapper);
