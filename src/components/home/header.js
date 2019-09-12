import React, { Component } from 'react';

import { translate } from 'react-i18next';
import { Link } from 'gatsby';

import greymassHeaderBackground from '../../images/greymassHeaderBackground.svg';
import homeHeaderStyles from './header.module.css';

class HomeHeader extends Component {
  render() {
    const { t } = this.props;

    return (
      <div style={{ paddingBottom: '50px' }} basic>
        <h4 className={homeHeaderStyles.headerText}>
         {t('header_one')}
        </h4>
        <img
          alt='greymass-header'
          className={homeHeaderStyles.background}
          src={greymassHeaderBackground}
        />
        <h4 className={homeHeaderStyles.headerText}>
          {t('header_two')}
        </h4>

        <div style={{ marginTop: '40px' }}>
          <h5 className={homeHeaderStyles.subheaderText}>
            {t('header_bottom_one')}
          </h5>
          <h5 className={homeHeaderStyles.subheaderText}>
            {t('header_bottom_two')}

            <Link className={homeHeaderStyles.supportUsLink} to={`#support-us`}>
              {t('header_bottom_link')}
            </Link>
          </h5>
        </div>
      </div>
    )
  }
}

export default translate('home')(HomeHeader);
