import React, { Component } from "react";

import { isMacOs } from "react-device-detect";

import { injectIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
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
    if (isMacOs) {
      this.setState({ macOs: true })
    }
  }

  render() {
    const { intl } = this.props;

    const { macOs } = this.state;

    return (
      <div id={getStartedStyles.containerFluid}>
        <img src={pattern} alt="" className={getStartedStyles.background} />
        <Container className={getStartedStyles.container}>
          <h1 className={getStartedStyles.header}>
            {intl.formatMessage({ id: "anchor_get_started_header" })}
          </h1>

          <a
            href={
              macOs ?
                'https://github.com/greymass/anchor/releases/download/v1.1.8/mac-anchor-wallet-1.1.8.dmg' :
                'https://github.com/greymass/anchor/releases/download/v1.1.8/win-anchor-wallet-1.1.8.exe'
            }
            className={getStartedStyles.download}
          >
            <button>
              {intl.formatMessage({ id: macOs ? "download_for_mac" : "download_for_windows" })}
            </button>
          </a>

          <div className={getStartedStyles.versions}>
            <div className={getStartedStyles.version}>
              <span>{intl.formatMessage({ id: "shared_desktop" })}</span>
              <a
                className={getStartedStyles.versionImgName}
                href='https://github.com/greymass/anchor/releases/download/v1.1.8/win-anchor-wallet-1.1.8.exe'
              >
                <img src={windows} alt="windows" />
                <span>Windows</span>
              </a>

              <a
                className={getStartedStyles.versionImgName}
                href='https://github.com/greymass/anchor/releases/download/v1.1.8/mac-anchor-wallet-1.1.8.dmg'
              >
                <img src={macOS} alt="macOS" />
                <span>macOS</span>
              </a>

              <a
                className={getStartedStyles.versionImgName}
                href='https://github.com/greymass/anchor/releases/v1.1.8'
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
