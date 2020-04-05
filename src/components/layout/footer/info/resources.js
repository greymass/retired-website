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
          to="ownership_disclosure"
          content={intl.formatMessage({ id: 'ownership' })}
        />
        <span className={footerResourcesStyles.divider}>|</span>
        <FooterResourcesLink
          to="code_of_conduct"
          content={intl.formatMessage({ id: 'code_of_conduct'})}
        />
        <div className={footerResourcesStyles.menuSecondLine} >
          <FooterResourcesLink
            to="https://greymass.com/bp.json"
            content={intl.formatMessage({ id: 'bp_info' })}
          />
        </div>
        <p className={footerResourcesStyles.copyright}>
          <span className={footerResourcesStyles.copyrightSpan}>&#9400;</span>
          {intl.formatMessage({ id: 'copyright_text' })}
        </p>
      </div>
    )
  }
}

export default injectIntl(Resources);
