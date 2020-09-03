import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"

import voteUsStyles from "./voteUs.module.css"

class VoteUsButton extends Component {
  render() {
    const { centered, intl } = this.props
    return (
      <Link
        to={`/${intl.locale}/support-us`}
        style={{
          textAlign: centered ? "center" : "",
        }}
      >
        <div className={voteUsStyles.voteUsButton}>
          {/* {intl.formatMessage({ id: "home_header_vote" })} */}
        </div>
      </Link>
    )
  }
}

export default injectIntl(VoteUsButton)
