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
import { graphql, StaticQuery } from "gatsby"

class GetStarted extends Component {
  state = {};

  componentDidMount() {
    const {
      data: {
        site: {
          siteMetadata: {
            anchor: {
              iosDownloadUrl,
              androidDownloadUrl,
              linuxDownloadUrl,
              macDownloadUrl,
              windowsDownloadUrl,
            }
          }
        }
      }
    } = this.props;

    if (isAndroid) {
      this.setState({
        currentDeviceTextId: 'download_for_android',
        currentDeviceUrl: androidDownloadUrl,
      })
    } else if (isIOS) {
      this.setState({
        currentDeviceTextId: 'download_for_ios',
        currentDeviceUrl: iosDownloadUrl,
      })
    } else if (isMacOs) {
      this.setState({
        currentDeviceTextId: 'download_for_mac',
        currentDeviceUrl: macDownloadUrl,
      })
    } else if (isWindows) {
      this.setState({
        currentDeviceTextId: 'download_for_windows',
        currentDeviceUrl: windowsDownloadUrl,
      })
    } else {
      this.setState({
        currentDeviceTextId: 'download_for_linux',
        currentDeviceUrl: linuxDownloadUrl
      })
    }
  }

  render() {
    const {
      intl,
      data: {
        site: {
          siteMetadata: {
            anchor: {
              androidDownloadUrl,
              iosDownloadUrl,
              linuxDownloadUrl,
              macDownloadUrl,
              windowsDownloadUrl,
            }
          }
        }
      }
    } = this.props;

    const {
      currentDeviceTextId,
      currentDeviceUrl,
    } = this.state;

    return (
      <div id={getStartedStyles.containerFluid}>
        <div className={getStartedStyles.backgroundContainer}>
          <img src={pattern} alt="" className={getStartedStyles.background} />
        </div>
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
                href={windowsDownloadUrl}
              >
                <img src={windows} alt="windows" />
                <span>Windows</span>
              </a>

              <a
                className={getStartedStyles.versionImgName}
                href={macDownloadUrl}
              >
                <img src={macOS} alt="macOS" />
                <span>macOS</span>
              </a>

              <a
                className={getStartedStyles.versionImgName}
                href={linuxDownloadUrl}
              >
                <img src={linux} alt="linux" />
                <span>Linux</span>
              </a>
            </div>
            <div className={getStartedStyles.version}>
              <span>{intl.formatMessage({ id: "shared_mobile" })}</span>
              <a
                className={getStartedStyles.versionImgName}
                href={iosDownloadUrl}
              >
                <img src={macOS} alt="macOS" />
                <span>iOS</span>
              </a>
              <a
                className={getStartedStyles.versionImgName}
                href={androidDownloadUrl}
              >
                <img src={android} alt="android" />
                <span>{intl.formatMessage({ id: "shared_android" })}</span>
              </a>
            </div>
          </div>
          <Banners />
        </Container>
      </div>
    );
  }
}

const GetStartedWrapper = props => (
  <StaticQuery
    query={graphql`
        query {
          site {
            siteMetadata {
              anchor {
                androidDownloadUrl
                iosDownloadUrl
                linuxDownloadUrl
                macDownloadUrl
                windowsDownloadUrl
              }
            }
          }
        }
    `}
    render={data => <GetStarted data={data} {...props} />}
  />
);

export default injectIntl(GetStartedWrapper);
