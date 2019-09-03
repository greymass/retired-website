import React, { Component } from "react";

import { Link } from "gatsby";

class LayoutHeaderLink extends Component {
  render() {
    const {
      content,
      to,
    } = this.props;

    const linkStyle = {
      padding: '10px',
      paddingBottom: '0px',
    };

    return (
      <Link to={to} style={linkStyle}>
        {content}
      </Link>
    )
  }
}

export default LayoutHeaderLink;


