import React, { Component } from "react"

import { injectIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"
import { Container } from "semantic-ui-react"
import versionsStyles from "./versions.module.css"

import mobile from "../../../images/mobile.png"
import pc from "../../../images/pc.png"
import mob1 from "../../../images/check.svg"
import mob2 from "../../../images/key.svg"
import mob3 from "../../../images/ios.svg"
import mob4 from "../../../images/android.svg"
import mob5 from "../../../images/secure.svg"
import mob6 from "../../../images/fuel.svg"
import mob7 from "../../../images/user-plus.svg"

import pc3 from "../../../images/support.svg"
import pc4 from "../../../images/feature.svg"
import pc6 from "../../../images/win.svg"
import pc8 from "../../../images/linux.svg"

class Versions extends Component {
  constructor(props) {
    super(props)
    this.state = { isMobile: true }
    this.icons = {
      mobile: [mob1, mob2, [mob3, mob4], mob5, mob6, mob7],
      pc: [mob1, mob2, pc3, pc4, mob6, [pc6, mob3, pc8]],
    }
  }
  handleVersionClick(version) {
    if (version !== this.state.isMobile) {
      this.setState({ isMobile: version })
    }
  }
  render() {
    const { intl } = this.props

    return (
      <div id={versionsStyles.containerFluid}>
        <Container className={versionsStyles.container}>
          <div className={versionsStyles.versions}>
            <button
              className={this.state.isMobile ? versionsStyles.enabled : ""}
              onClick={() => this.handleVersionClick(true)}
            >
              {intl.formatMessage({ id: "shared_mobile" })}
            </button>
            <button
              className={!this.state.isMobile ? versionsStyles.enabled : ""}
              onClick={() => this.handleVersionClick(false)}
            >
              {intl.formatMessage({ id: "shared_desktop" })}
            </button>
          </div>
          <div className={versionsStyles.header}>
            <div className={versionsStyles.leftSide}>
              <h2 className={versionsStyles.headerMain}>
                {intl.formatMessage({ id: "anchor_versions_header" })}
              </h2>
              <span className={versionsStyles.headerAbout}>
                {intl.formatMessage({ id: "anchor_versions_subheading" })}
              </span>
              <Link
                to={`/${intl.locale}/download`}
                className={versionsStyles.download}
              >
                <button>
                  {intl.formatMessage({ id: "anchor_versions_download_now" })}
                </button>
              </Link>
            </div>
            <img src={this.state.isMobile ? mobile : pc} alt="version" />
          </div>
          <div className={versionsStyles.aboutBlocks}>
            {[0, 1, 2, 3, 4, 5].map(num => (
              <div className={versionsStyles.block} key={num}>
                <div className={versionsStyles.images}>
                  {this.state.isMobile ? (
                    Array.isArray(this.icons.mobile[num]) ? (
                      this.icons.mobile[num].map((img, index) => (
                        <img src={img} alt="" key={index} />
                      ))
                    ) : (
                      <img src={this.icons.mobile[num]} alt="" />
                    )
                  ) : Array.isArray(this.icons.pc[num]) ? (
                    this.icons.pc[num].map((img, index) => (
                      <img src={img} alt="" key={index} />
                    ))
                  ) : (
                    <img src={this.icons.pc[num]} alt="" />
                  )}
                </div>
                <h3 className={versionsStyles.name}>
                  {intl.formatMessage({
                    id: `anchor_versions_${
                      this.state.isMobile ? "mobile" : "pc"
                    }_name_${num + 1}`,
                  })}
                </h3>
                <span className={versionsStyles.about}>
                  {intl.formatMessage({
                    id: `anchor_versions_${
                      this.state.isMobile ? "mobile" : "pc"
                    }_about_${num + 1}`,
                  })}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  }
}
export default injectIntl(Versions)
