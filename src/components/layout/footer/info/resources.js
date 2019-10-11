import React, { Component } from 'react';
import { translate } from 'react-i18next';

import FooterResourcesLink from './resources/link';
import footerResourcesStyles from './resources.module.css';

class Resources extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className={footerResourcesStyles.container}>
        <FooterResourcesLink to={`bp-info`} content={t('bp_info')} />
        <span className={footerResourcesStyles.divider}>|</span>
        <FooterResourcesLink to={`code-of-conduct`} content={t('code_of_conduct')} />
        <span className={footerResourcesStyles.divider}>|</span>
        <FooterResourcesLink to={`ownership`} content={t('ownership')} />
        <div className={footerResourcesStyles.menuSecondLine} >
          <FooterResourcesLink to={`terms-of-use`} content={t('terms_of_use')} />
          <span className={footerResourcesStyles.divider}>|</span>
          <FooterResourcesLink to={`privacy-policy`} content={t('privacy_policy')} />
        </div>
        <p className={footerResourcesStyles.copyright}>
          <span className={footerResourcesStyles.copyrightSpan}>&#9400;</span>
          {t('copyright_text')}
        </p>
      </div>
    )
  }
}

export default translate('layout')(Resources);
