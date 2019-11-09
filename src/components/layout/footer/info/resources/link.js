import React, { Component } from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Link } from 'gatsby';

import linkStyles from './link.module.css';

class LayoutHeaderLink extends Component {
  render() {
    const {
      content,
      intl,
      to,
    } = this.props;

    return (to.includes('http')) ? (
      <a href={to} className={linkStyles.link}>
        {content}
      </a>
    ) : (
      <Link to={`/${intl.locale}/${to}`} className={linkStyles.link}>
        {content}
      </Link>
    );
  }
}

export default injectIntl(LayoutHeaderLink);


