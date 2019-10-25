import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import { Link } from 'gatsby';

import supportUsButtonStyles from './supportUs.module.css';

class SupportUsButton extends Component {
  render() {
    const { intl } = this.props;
    return (
      <Link to={`/${intl.locale}/support`}>
        <div className={supportUsButtonStyles.supportUsButton}>
          <h3 style={supportUsButtonStyles.supportUsText}>
            {intl.formatMessage({ id: 'shared_support_us' })}
          </h3>
        </div>
      </Link>
    )
  }
}

export default injectIntl(SupportUsButton);
