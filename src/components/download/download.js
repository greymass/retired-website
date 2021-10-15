import React, { Component } from "react"

import {
  isAndroid,
  isIOS,
  isMacOs,
  isWindows,
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
import { graphql, StaticQuery } from "gatsby"

class VersionsDownload extends Component {
  state = {};

  componentDidMount() {
    const {
      data: {
        site: {
          siteMetadata: {
            anchor: {
              iosDownloadUrl,
              linuxDownloadUrl,
              macDownloadUrl,
              windowsDownloadUrl,
            }
          }
        }
      }
    } = this.props;

    // Turning off mobile device detection on this page for now since android is not available.

    // if (isAndroid) {
    //   this.setState({
    //     currentDeviceTextId: 'download_for_android'
    //   })
    // } else if (isIOS) {
    //   this.setState({
    //     currentDeviceTextId: 'download_for_ios',
    //     currentDeviceUrl: iosDownloadUrl,
    //   })
    // } else
    if (isMacOs) {
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
            links: githubLink,
            anchor: {
              desktopReleaseDate,
              desktopVersion,
              iosDownloadUrl,
              iosReleaseDate,
              iosVersion,
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

            <div className={downloadStyles.compatibility}>
              <span className={downloadStyles.opacity}>
                {intl.formatMessage({ id: "available" })}
              </span>
              <div className={downloadStyles.compatibilityImgDesktop}>
                <a
                  className={downloadStyles.versionImgName}
                  href={windowsDownloadUrl}
                >
                  <img src={windows} alt="windows" />
                  <span>Windows</span>
                </a>

                <a
                  className={downloadStyles.versionImgName}
                  href={macDownloadUrl}
                >
                  <img src={macOS} alt="macOS" />
                  <span>macOS</span>
                </a>

                <a
                  className={downloadStyles.versionImgName}
                  href={linuxDownloadUrl}
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
                  {intl.formatMessage({ id: "last_updated_desktop" }, { updateData: `${desktopReleaseDate} (${desktopVersion})` })}
                </span>{" "}
                <a className={downloadStyles.githubLink} href="https://github.com/greymass/anchor">
                  Github
                </a>
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
              href={iosDownloadUrl}
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
                  href={iosDownloadUrl}
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
                  {intl.formatMessage({ id: "last_updated_mobile" }, { updateData: `${iosReleaseDate} (${iosVersion})` })}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

const VersionsDownloadWrapper = props => (
  <StaticQuery
    query={graphql`
       query {
          site {
            siteMetadata {
              links {
                github
              }
              anchor {
                desktopReleaseDate
                desktopVersion
                iosDownloadUrl
                iosReleaseDate
                iosVersion
                linuxDownloadUrl
                macDownloadUrl
                windowsDownloadUrl
              }
            }
          }
        }
    `}
    render={data => <VersionsDownload data={data} {...props} />}
  />
);

export default injectIntl(VersionsDownloadWrapper);
