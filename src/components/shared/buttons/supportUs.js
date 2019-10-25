import React, { Component } from 'react';

import { Link } from 'gatsby';


import supportUsButtonStyles from './supportUs.module.css';

class SupportUsButton extends Component {
  render() {
    return (
      <Link to={`/support`}>
        <div className={supportUsButtonStyles.supportUsButton}>
          <h3 style={supportUsButtonStyles.supportUsText}>
            {'support_us'}
          </h3>
        </div>
      </Link>
    )
  }
}

export default SupportUsButton;
