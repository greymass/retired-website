import React, { Component } from "react";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import { Container } from "semantic-ui-react";
import phone from "../../images/phone.png";
import pattern from "../../images/pattern.png";
import homeHeaderStyles from "./header.module.css";

class HomeHeader extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className={homeHeaderStyles.containerFluid}>
        <img src={pattern} alt="" className={homeHeaderStyles.background} />
        <Container className={homeHeaderStyles.container}>
          <div className={homeHeaderStyles.leftSide}>
            <p className={homeHeaderStyles.headerText}>
              {intl.formatMessage({ id: "home_header_one" })}
            </p>
            <p className={homeHeaderStyles.headerDescription}>
              {intl.formatMessage({ id: "home_header_description" })}
            </p>
            <Link to={`/${intl.locale}/download`}>
              <button className={homeHeaderStyles.download}>
                Download for Free Today
              </button>
            </Link>
          </div>
          <img
            src={phone}
            alt="greymass-phone"
            className={homeHeaderStyles.phone}
          />
        </Container>
      </div>
    );
  }
}

export default injectIntl(HomeHeader);
