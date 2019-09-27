import React, { Component } from 'react';

import { Link } from 'gatsby';

import linkStyles from './link.module.css';

class LayoutHeaderLink extends Component {
  render() {
    const {
      content,
      to,
    } = this.props;

    return (
      <Link to={to} className={linkStyles.link}>
        {content}
      </Link>
    )
  }
}

export default LayoutHeaderLink;


