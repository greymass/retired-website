import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import { Link } from 'gatsby';

import supportUsStyles from './supportUs.module.css';

class SupportUsButton extends Component {
  render() {
    const {
      centered,
      intl,
    } = this.props;
    return (
      <Link to={`/${intl.locale}/support`} style={{
        textAlign: (centered) ? 'center' : '',
      }}>
        <div className={supportUsStyles.supportUsButton}>
          <h3 className={supportUsStyles.supportUsText}>
            {intl.formatMessage({ id: 'shared_support_us' })}
          </h3>
        </div>
      </Link>
    )
  }
}

export default injectIntl(SupportUsButton);
