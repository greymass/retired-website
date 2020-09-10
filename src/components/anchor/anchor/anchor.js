import React, { Component } from "react"

import { injectIntl } from "gatsby-plugin-intl"
import anchorStyles from "./anchor.module.css"
import logo from "../../../images/anchor-blue-icon.svg"
import anchor from "../../../images/ANCHOR.svg"
import privateLogo from "../../../images/private.svg"
import secureLogo from "../../../images/secureLogo.svg"
import integrationLogo from "../../../images/integration.svg"
import { Container } from "semantic-ui-react"

class Anchor extends Component {
  render() {
    const { intl } = this.props

    return (
      <div id={anchorStyles.containerFluid}>
        <Container className={anchorStyles.container}>
          <div className={anchorStyles.logo}>
            <img
              src={logo}
              alt="Anchor logo"
              className={anchorStyles.logoImg}
            />
            <img src={anchor} alt="ANCHOR" className={anchorStyles.anchor} />
          </div>
          <div className={anchorStyles.description}>
            {intl.formatMessage({ id: "anchor_anchor_description" })}
          </div>
          <hr className={anchorStyles.line} />
          <div className={anchorStyles.advantages}>
            <div className={anchorStyles.block}>
              <img src={secureLogo} alt="secure" />
              <h3 className={anchorStyles.advantageName}>
                {intl.formatMessage({ id: "anchor_anchor_secure_subheading" })}
              </h3>
              <span className={anchorStyles.advantageDescription}>
                {intl
                  .formatMessage({ id: "anchor_anchor_secure_description" })
                  .split("'")
                  .map((descrPart, index) =>
                    index % 2 !== 0 ? (
                      <React.Fragment key={descrPart}>
                        <div className={anchorStyles.descrWithHelper}>
                          {descrPart.split(" ")[0]}
                          <span className={anchorStyles.descrNumber}>
                            {descrPart.split(" ")[1]}
                          </span>
                          <div className={anchorStyles.helper}>
                            <span className={anchorStyles.helperNum}>
                              {descrPart.split(" ")[1]}
                            </span>
                            Anchor, both Desktop and Mobile, by default will
                            only use API servers operated by Greymass. No 3rd
                            party tracking exists within our products.
                          </div>
                        </div>
                      </React.Fragment>
                    ) : (
                      <span key={descrPart}>{descrPart} </span>
                    )
                  )}
              </span>
            </div>

            <div className={anchorStyles.block}>
              <img src={privateLogo} alt="private" />
              <h3 className={anchorStyles.advantageName}>
                {intl.formatMessage({ id: "anchor_anchor_private_subheading" })}
              </h3>
              <span className={anchorStyles.advantageDescription}>
                {intl.formatMessage({
                  id: "anchor_anchor_private_description",
                })}
              </span>
            </div>

            <div className={anchorStyles.block}>
              <img src={integrationLogo} alt="integration" />
              <h3 className={anchorStyles.advantageName}>
                {intl.formatMessage({
                  id: "anchor_anchor_integration_subheading",
                })}
              </h3>
              <span className={anchorStyles.advantageDescription}>
                {intl.formatMessage({
                  id: "anchor_anchor_integration_description",
                })}
              </span>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default injectIntl(Anchor)
