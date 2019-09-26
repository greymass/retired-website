import React, { Component } from "react";

import { Link } from "gatsby";

import linkStyles from './link.module.css'

class LayoutHeaderLink extends Component {
  render() {
    const {
      active,
      content,
      to,
    } = this.props;

    return (
      <div
        className={
          `${linkStyles.container} ${
            active ?
              linkStyles.activeContainer :
              linkStyles.inactiveContainer
          }`
        }
      >
        <Link to={to}>
          <h3
            className={
              `${linkStyles.text} ${
                active ?
                  linkStyles.activeText :
                  linkStyles.inactiveText
              }`}>
            {content}
          </h3>
          {active && (
            <div
              className={linkStyles.activeBottomBar}
            />
          )}
        </Link>
      </div>
    )
  }
}

export default LayoutHeaderLink;


