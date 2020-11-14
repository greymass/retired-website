import React, { Component } from "react"

import {
  isMacOs,
} from "react-device-detect";

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
  state = {};

  componentDidMount() {
    if (isMacOs) {
      this.setState({ macOs: true })
    }
  }

  render() {
    const { intl } = this.props;
    const { macOs } = this.state;

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
            <a
              className={downloadStyles.versionImgName}
              href={
                macOs ?
                'https://github.com/greymass/anchor/releases/download/v1.1.8/mac-anchor-wallet-1.1.8.dmg' :
                  'https://github.com/greymass/anchor/releases/download/v1.1.8/win-anchor-wallet-1.1.8.exe'
              }
            >
              <button className={downloadStyles.download}>
                {intl.formatMessage({ id: macOs ? "download_for_mac" : "download_for_windows" })}
              </button>
            </a>
            <div className={downloadStyles.compatibility}>
              <span className={downloadStyles.opacity}>
                {intl.formatMessage({ id: "available" })}
              </span>
              <div className={downloadStyles.compatibilityImgDesktop}>
                <a
                  className={downloadStyles.versionImgName}
                  href='https://github.com/greymass/anchor/releases/download/v1.1.8/win-anchor-wallet-1.1.8.exe'
                >
                  <img src={windows} alt="windows" />
                  <span>Windows</span>
                </a>

                <a
                  className={downloadStyles.versionImgName}
                  href='https://github.com/greymass/anchor/releases/download/v1.1.8/mac-anchor-wallet-1.1.8.dmg'
                >
                  <img src={macOS} alt="macOS" />
                  <span>macOS</span>
                </a>

                <a
                  className={downloadStyles.versionImgName}
                  href='https://github.com/greymass/anchor/releases/v1.1.8'
                >
                  <img src={linux} alt="linux" />
                  <span>Linux</span>
                </a>
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
                  {intl.formatMessage({ id: "last_updated_desktop" }, { updateData: '2020/10/23 (1.1.8)' })}
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
            <a
              className={downloadStyles.download}
              href='https://apps.apple.com/us/app/anchor-wallet/id1487410877'
            >
              {intl.formatMessage({ id: "download_for_ios" })}
            </a>
            <div className={downloadStyles.compatibility}>
              <span className={downloadStyles.opacity}>
                {intl.formatMessage({ id: "available" })}
              </span>
              <div className={downloadStyles.compatibilityImg}>
                <a
                  className={downloadStyles.versionImgName}
                  href='https://apps.apple.com/us/app/anchor-wallet/id1487410877'
                >
                  <img src={macOS} alt="iOS" />
                  <span>iOS</span>
                </a>

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
                  {intl.formatMessage({ id: "last_updated_mobile" }, { updateData: '2020/09/23 (1.0.2)' })}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default injectIntl(VersionsDownload)
