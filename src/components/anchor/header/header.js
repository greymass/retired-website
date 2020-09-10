import React, { Component } from "react";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import { Container } from "semantic-ui-react";
import phone from "../../../images/phone.png";
import pattern from "../../../images/pattern.png";
import anchorHeaderStyles from "./header.module.css";

class AnchorHeader extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div id={anchorHeaderStyles.containerFluid}>
        <img src={pattern} alt="" className={anchorHeaderStyles.background} />
        <Container className={anchorHeaderStyles.container}>
          <div className={anchorHeaderStyles.leftSide}>
            <p className={anchorHeaderStyles.headerText}>
              {intl.formatMessage({ id: "anchor_header_one" })}
            </p>
            <p className={anchorHeaderStyles.headerDescription}>
              {intl.formatMessage({ id: "anchor_header_description" })}
            </p>
            <Link to={`/${intl.locale}/download`}>
              <button className={anchorHeaderStyles.download}>
                {intl.formatMessage({
                  id: "anchor_header_download_for_free_today",
                })}
              </button>
            </Link>
          </div>
          <img
            src={phone}
            alt="greymass-phone"
            className={anchorHeaderStyles.phone}
          />
        </Container>
      </div>
    );
  }
}

export default injectIntl(AnchorHeader);
