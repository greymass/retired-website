import React, { Component } from "react";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import { Container } from "semantic-ui-react";
import phoneFull from "../../../images/phoneFull.png";
import pattern from "../../../images/pattern.png";
import anchorHeaderStyles from "./header.module.css";

class AnchorHeader extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div id={anchorHeaderStyles.containerFluid}>
        <div className={anchorHeaderStyles.backgroundContainer}>
          <img src={pattern} alt="" className={anchorHeaderStyles.background} />
        </div>
        <Container className={anchorHeaderStyles.container}>
          <div className={anchorHeaderStyles.leftSide}>
            <h2 className={anchorHeaderStyles.headerText}>
              <div>{intl.formatMessage({ id: "anchor_header_one" })}</div>
              {intl.formatMessage({ id: "anchor_header_two" })}
            </h2>
            <p className={anchorHeaderStyles.headerDescription}>
              {intl.formatMessage({ id: "anchor_header_description" })}
            </p>
            <Link className={anchorHeaderStyles.downloadLink} to={`/${intl.locale}/download`}>
              <button className={anchorHeaderStyles.download}>
                {intl.formatMessage({
                  id: "anchor_header_download_for_free_today",
                })}
              </button>
            </Link>
          </div>
          <div className={anchorHeaderStyles.imgContainer}>
            <img
              src={phoneFull}
              alt="greymass-phone"
              className={anchorHeaderStyles.phone}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default injectIntl(AnchorHeader);
