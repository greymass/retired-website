import React, { Component } from 'react';

import { Link } from 'gatsby';
import { translate } from 'react-i18next';

import supportUsButtonStyles from './supportUs.module.css';

class SupportUsButton extends Component {
  render() {
    const { t } = this.props;

    return (
      <Link to={`/support`}>
        <div className={supportUsButtonStyles.supportUsButton}>
          <h3 style={supportUsButtonStyles.supportUsText}>
            {t('support_us')}
          </h3>
        </div>
      </Link>
    )
  }
}

export default translate('shared')(SupportUsButton);
