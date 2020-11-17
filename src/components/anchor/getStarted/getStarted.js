import React, { Component } from "react";

import { isAndroid, isIOS, isMacOs, isWindows } from "react-device-detect"

import { injectIntl } from "gatsby-plugin-intl";
import { Container } from "semantic-ui-react";

import Banners from "./banners";
import getStartedStyles from "./getStarted.module.css";
import windows from "../../../images/windows_white.svg";
import macOS from "../../../images/macOS_white.svg";
import linux from "../../../images/linux_white.svg";
import android from "../../../images/android_white.svg";
import pattern from "../../../images/pattern.png";
import downloadStyles from "../../download/download.module.css"

class GetStarted extends Component {
  state = {};

  componentDidMount() {
    if (isAndroid) {
      this.setState({
        currentDeviceTextId: 'download_for_android'
      })
    } else if (isIOS) {
      this.setState({
        currentDeviceTextId: 'download_for_ios',
        currentDeviceUrl: 'https://apps.apple.com/us/app/anchor-wallet/id1487410877'
      })
    } else if (isMacOs) {
      this.setState({
        currentDeviceTextId: 'download_for_mac',
        currentDeviceUrl: `https://github.com/greymass/anchor/releases/download/v${process.env.ANCHOR_DESKTOP_VERSION}/mac-anchor-wallet-${process.env.ANCHOR_DESKTOP_VERSION}.dmg`
      })
    } else if (isWindows) {
      this.setState({
        currentDeviceTextId: 'download_for_windows',
        currentDeviceUrl: `https://github.com/greymass/anchor/releases/download/v${process.env.ANCHOR_DESKTOP_VERSION}/win-anchor-wallet-${process.env.ANCHOR_DESKTOP_VERSION}.exe`
      })
    } else {
      this.setState({
        currentDeviceTextId: 'download_for_linux',
        currentDeviceUrl: `https://github.com/greymass/anchor/releases/v${process.env.ANCHOR_DESKTOP_VERSION}`
      })
    }
  }

  render() {
    const { intl } = this.props;

    const {
      currentDeviceTextId,
      currentDeviceUrl,
    } = this.state;

    console.log({
      currentDeviceTextId,
      currentDeviceUrl,
    })

    return (
      <div id={getStartedStyles.containerFluid}>
        <img src={pattern} alt="" className={getStartedStyles.background} />
        <Container className={getStartedStyles.container}>
          <h1 className={getStartedStyles.header}>
            {intl.formatMessage({ id: "anchor_get_started_header" })}
          </h1>

          {currentDeviceUrl ? (
            <a
              className={downloadStyles.versionImgName}
              href={currentDeviceUrl}
            >
              <button className={downloadStyles.download}>
                {intl.formatMessage({ id: currentDeviceTextId })}
              </button>
            </a>
          ) : (
            <div className={downloadStyles.versionImgName}>
              <button className={downloadStyles.download}>
                {currentDeviceTextId && intl.formatMessage({ id: currentDeviceTextId })}
              </button>
            </div>
          )}

          <div className={getStartedStyles.versions}>
            <div className={getStartedStyles.version}>
              <span>{intl.formatMessage({ id: "shared_desktop" })}</span>
              <a
                className={getStartedStyles.versionImgName}
                href={`https://github.com/greymass/anchor/releases/download/v${process.env.ANCHOR_DESKTOP_VERSION}/win-anchor-wallet-${process.env.ANCHOR_DESKTOP_VERSION}.exe`}
              >
                <img src={windows} alt="windows" />
                <span>Windows</span>
              </a>

              <a
                className={getStartedStyles.versionImgName}
                href={`https://github.com/greymass/anchor/releases/download/v${process.env.ANCHOR_DESKTOP_VERSION}/mac-anchor-wallet-${process.env.ANCHOR_DESKTOP_VERSION}.dmg`}
              >
                <img src={macOS} alt="macOS" />
                <span>macOS</span>
              </a>

              <a
                className={getStartedStyles.versionImgName}
                href={`https://github.com/greymass/anchor/releases/v${process.env.ANCHOR_DESKTOP_VERSION}`}
              >
                <img src={linux} alt="linux" />
                <span>Linux</span>
              </a>
            </div>
            <div className={getStartedStyles.version}>
              <span>{intl.formatMessage({ id: "shared_mobile" })}</span>
              <a
                className={getStartedStyles.versionImgName}
                href='https://apps.apple.com/us/app/anchor-wallet/id1487410877'
              >
                <img src={macOS} alt="macOS" />
                <span>iOS</span>
              </a>
              <div
                className={`${getStartedStyles.versionImgName} ${getStartedStyles.opacity}`}
              >
                <img src={android} alt="android" />
                <span>{intl.formatMessage({ id: "shared_android" })}</span>
              </div>
            </div>
          </div>
          <Banners />
        </Container>
      </div>
    );
  }
}
export default injectIntl(GetStarted);
