import React, { Component } from "react";

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

class GetStarted extends Component {
  render() {
    const { intl } = this.props;

    return (
      <div className={getStartedStyles.containerFluid}>
        <img src={pattern} alt="" className={getStartedStyles.background} />
        <Container className={getStartedStyles.container}>
          <h1 className={getStartedStyles.header}>
            {intl.formatMessage({ id: "anchor_get_started_header" })}
          </h1>
          <Link
            to={`/${intl.locale}/download`}
            className={getStartedStyles.download}
          >
            <button>
              {intl.formatMessage({
                id: "anchor_get_started_download_for_macOs",
              })}
            </button>
          </Link>
          <div className={getStartedStyles.versions}>
            <div className={getStartedStyles.version}>
              <span>{intl.formatMessage({ id: "shared_desktop" })}</span>
              <div className={getStartedStyles.versionImgName}>
                <img src={windows} alt="windows" />
                <span>Windows</span>
              </div>

              <div className={getStartedStyles.versionImgName}>
                <img src={macOS} alt="macOS" />
                <span>macOS</span>
              </div>

              <div className={getStartedStyles.versionImgName}>
                <img src={linux} alt="linux" />
                <span>Linux</span>
              </div>
            </div>
            <div className={getStartedStyles.version}>
              <span>{intl.formatMessage({ id: "shared_mobile" })}</span>
              <div className={getStartedStyles.versionImgName}>
                <img src={macOS} alt="macOS" />
                <span>iOS</span>
              </div>
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
