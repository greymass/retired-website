import React, { Component } from "react"
import { Divider, Grid, Container } from "semantic-ui-react"

import { injectIntl } from "gatsby-plugin-intl"

import footerStyles from "./footer.module.css"
import github from "../../../images/github.svg"
import twitter from "../../../images/twitter.svg"
import telegram from "../../../images/telegram.svg"

class Footer extends Component {
  render() {
    const { intl, location, data } = this.props
    return (
      <div className={footerStyles.containerFluid}>
        <Container className={footerStyles.container}>
          <div className={footerStyles.leftSide}>
            <div className={footerStyles.about}>
              <span>{intl.formatMessage({ id: "ownership" })}</span>
              <span>{intl.formatMessage({ id: "code_of_conduct" })}</span>
              <span>{intl.formatMessage({ id: "bp_info" })}</span>
            </div>
            <div className={footerStyles.connect}>
              <span>{intl.formatMessage({ id: "connect_with_us" })}</span>
              <div className={footerStyles.logos}>
                <img src={github} alt="github" />
                <img src={twitter} alt="github" />
                <img src={telegram} alt="github" />
              </div>
            </div>
          </div>
          <div className={footerStyles.info}>
            <span>hello@greymass.com</span>
            <span>{intl.formatMessage({ id: "site_address" })}</span>
            <span>{intl.formatMessage({ id: "copyright_text" })}</span>
          </div>
        </Container>
      </div>
    )
  }
}

export default injectIntl(Footer)
