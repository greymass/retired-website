import React, { Component } from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import FooterResourcesLink from './resources/link';
import footerResourcesStyles from './resources.module.css';

class Resources extends Component {
  render() {
    const { intl } = this.props;

    return (
      <div className={footerResourcesStyles.container}>
        <FooterResourcesLink
          to="https://greymass.com/bp.json"
          content={intl.formatMessage({ id: 'bp_info' })}
        />
        <span className={footerResourcesStyles.divider}>|</span>
        <FooterResourcesLink
          to="resources/code-of-conduct"
          content={intl.formatMessage({ id: 'code_of_conduct'})}
        />
        <span className={footerResourcesStyles.divider}>|</span>
        <FooterResourcesLink
          to="resources/ownership"
          content={intl.formatMessage({ id: 'ownership' })}
        />
        <div className={footerResourcesStyles.menuSecondLine} >
          <FooterResourcesLink
            to="resources/terms-of-use"
            content={intl.formatMessage({ id: 'terms_of_use' })}
          />
          <span className={footerResourcesStyles.divider}>|</span>
          <FooterResourcesLink
            to="resources/privacy-policy"
            content={intl.formatMessage({ id: 'privacy_policy' })}
          />
        </div>
        <p className={footerResourcesStyles.copyright}>
          <span className={footerResourcesStyles.copyrightSpan}>&#9400;</span>
          {'copyright_text'}
        </p>
      </div>
    )
  }
}

export default injectIntl(Resources);
