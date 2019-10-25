import React, { Component } from 'react';


import FooterResourcesLink from './resources/link';
import footerResourcesStyles from './resources.module.css';

class Resources extends Component {
  render() {
    return (
      <div className={footerResourcesStyles.container}>
        <FooterResourcesLink to="/bp-info" content={'bp_info'} />
        <span className={footerResourcesStyles.divider}>|</span>
        <FooterResourcesLink to="/code-of-conduct" content={'code_of_conduct'} />
        <span className={footerResourcesStyles.divider}>|</span>
        <FooterResourcesLink to="/ownership" content={'ownership'} />
        <div className={footerResourcesStyles.menuSecondLine} >
          <FooterResourcesLink to="/terms-of-use" content={'terms_of_use'} />
          <span className={footerResourcesStyles.divider}>|</span>
          <FooterResourcesLink to="/privacy-policy" content={'privacy_policy'} />
        </div>
        <p className={footerResourcesStyles.copyright}>
          <span className={footerResourcesStyles.copyrightSpan}>&#9400;</span>
          {'copyright_text'}
        </p>
      </div>
    )
  }
}

export default Resources;
