import React, { Component } from "react"

import { injectIntl } from "gatsby-plugin-intl"
import { Container } from "semantic-ui-react"
import downloadStyles from "./download.module.css"
import windows from "../../images/windows_white.svg"
import macOS from "../../images/macOS_white.svg"
import linux from "../../images/linux_white.svg"
import android from "../../images/android_white.svg"
import phone from "../../images/phone.png"
import desktop from "../../images/desktop.png"
import pattern from "../../images/pattern.png"

class VersionsDownload extends Component {
  render() {
    const { intl } = this.props

    return (
      <div id={downloadStyles.containerFluid}>
        <Container className={downloadStyles.container}>
          <div className={downloadStyles.wallet}>
            <h1 className={downloadStyles.header}>
              {intl.formatMessage({ id: "header_desktop" })}
            </h1>
            <div className={downloadStyles.imgContainer}>
              <img src={pattern} alt="" className={downloadStyles.background} />
              <img
                src={desktop}
                alt="desktop"
                className={downloadStyles.desktopImg}
              />
            </div>
            <button className={downloadStyles.download}>
              {intl.formatMessage({ id: "download_for_mac" })}
            </button>
            <div className={downloadStyles.compatibility}>
              <span className={downloadStyles.opacity}>
                {intl.formatMessage({ id: "available" })}
              </span>
              <div className={downloadStyles.compatibilityImgDesktop}>
                <div className={downloadStyles.versionImgName}>
                  <img src={windows} alt="windows" />
                  <span>Windows</span>
                </div>

                <div className={downloadStyles.versionImgName}>
                  <img src={macOS} alt="macOS" />
                  <span>macOS</span>
                </div>

                <div className={downloadStyles.versionImgName}>
                  <img src={linux} alt="linux" />
                  <span>Linux</span>
                </div>
              </div>
            </div>
            <div className={downloadStyles.about}>
              <span className={downloadStyles.supported}>
                {intl.formatMessage({ id: "supported_blockchains" })}
              </span>
              <span className={downloadStyles.supported}>
                EOS, BEOS, BOS, FIO, Insights MEET.ONE, Proton, Telos, Worbli,
                WAX
              </span>
              <div className={downloadStyles.lastUpdatedDesktop}>
                <span className={downloadStyles.updated}>
                  {intl.formatMessage({ id: "last_updated" })}
                </span>{" "}
                Github
              </div>
            </div>
          </div>

          <div className={downloadStyles.wallet}>
            <h1 className={downloadStyles.header}>
              {intl.formatMessage({ id: "header_mobile" })}
            </h1>
            <div className={downloadStyles.imgContainer}>
              <img src={pattern} alt="" className={downloadStyles.background} />
              <img
                src={phone}
                alt="phone"
                className={downloadStyles.phoneImg}
              />
            </div>
            <button className={downloadStyles.download}>
              {intl.formatMessage({ id: "download_for_ios" })}
            </button>
            <div className={downloadStyles.compatibility}>
              <span className={downloadStyles.opacity}>
                {intl.formatMessage({ id: "available" })}
              </span>
              <div className={downloadStyles.compatibilityImg}>
                <div className={downloadStyles.versionImgName}>
                  <img src={macOS} alt="iOS" />
                  <span>iOS</span>
                </div>

                <div
                  className={`${downloadStyles.versionImgName} ${downloadStyles.opacity}`}
                >
                  <img src={android} alt="android" />
                  <span>{intl.formatMessage({ id: "android" })}</span>
                </div>
              </div>
            </div>
            <div className={downloadStyles.about}>
              <span className={downloadStyles.supported}>
                {intl.formatMessage({ id: "supported_blockchains" })}
              </span>
              <span className={downloadStyles.supported}>
                EOS, WAX, Telos, Proton, FIO
              </span>
              <div className={downloadStyles.lastUpdated}>
                <span className={downloadStyles.updated}>
                  {intl.formatMessage({ id: "last_updated" })}
                </span>{" "}
                Github
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default injectIntl(VersionsDownload)
