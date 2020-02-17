import React, { Component } from 'react';
import { Link } from 'gatsby';
import { injectIntl } from "gatsby-plugin-intl";

import greymassHeaderBackground from '../../images/greymassHeaderBackground.svg';
import homeHeaderStyles from './header.module.css';

class HomeHeader extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className={homeHeaderStyles.container}>
        <p className={homeHeaderStyles.headerText}>
          {intl.formatMessage({ id: 'home_header_one' })}
        </p>
        <img
          alt='greymass-header'
          className={homeHeaderStyles.image}
          src={greymassHeaderBackground}
        />
        <p className={homeHeaderStyles.headerText}>
          {intl.formatMessage({ id: 'home_header_two' })}
        </p>
        <div className={homeHeaderStyles.bottomContainer}>
          <p className={homeHeaderStyles.subheaderText}>
            {intl.formatMessage({ id: 'home_header_bottom_one' })}
          </p>
          <p className={homeHeaderStyles.subheaderText}>
            {intl.formatMessage({ id: 'home_header_bottom_two' })}
            <Link className={homeHeaderStyles.supportUsLink} to={`/support`}>
              {intl.formatMessage({ id: 'home_header_bottom_link' })}
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default injectIntl(HomeHeader);
