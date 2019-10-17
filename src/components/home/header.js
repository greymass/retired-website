import React, { Component } from 'react';

import { translate } from 'react-i18next';

import { Link } from 'gatsby';

import greymassHeaderBackground from '../../images/greymassHeaderBackground.svg';
import homeHeaderStyles from './header.module.css';

class HomeHeader extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className={homeHeaderStyles.container}>
        <p className={homeHeaderStyles.headerText}>
          {t('header_one')}
        </p>
        <img
          alt='greymass-header'
          className={homeHeaderStyles.image}
          src={greymassHeaderBackground}
        />
        <p className={homeHeaderStyles.headerText}>
          {t('header_two')}
        </p>

        <div className={homeHeaderStyles.bottomContainer}>
          <p className={homeHeaderStyles.subheaderText}>
            {t('header_bottom_one')}
          </p>
          <p className={homeHeaderStyles.subheaderText}>
            {t('header_bottom_two')}

            <Link className={homeHeaderStyles.supportUsLink} to={`support`}>
              {t('header_bottom_link')}
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default translate('home')(HomeHeader);
