import React, { Component } from 'react';

import { Link } from 'gatsby';

class LayoutHeaderLink extends Component {
  render() {
    const {
      content,
      to,
    } = this.props;

    const linkStyle = {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.05em',
      lineHeight: '30px',
      margin: '5px',
      textTransform: 'uppercase',
      color: 'white',
    };

    return (
      <Link to={to} style={linkStyle}>
        {content}
      </Link>
    )
  }
}

export default LayoutHeaderLink;


