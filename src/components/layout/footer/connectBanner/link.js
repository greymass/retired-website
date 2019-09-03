import React, { Component } from "react";

import { Link } from "gatsby";

class LayoutHeaderLink extends Component {
  render() {
    const {
      active,
      type,
      to,
    } = this.props;

    const containerStyles = {
      padding: active ? '13px' : '10px',
      paddingBottom: '0px',
    };

    return (
      <div style={containerStyles}>
        <Link to={to}>
          {type}
        </Link>
      </div>
    )
  }
}

export default LayoutHeaderLink;


