import React, { Component } from "react";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl"
import { Popup } from "semantic-ui-react"
import linkStyles from './link.module.css'

class LayoutHeaderMenuLink extends Component {
  render() {
    const {
      active,
      content,
      dropdown,
      intl,
      to,
    } = this.props;
    const element = (
      <h3
        className={
          `${linkStyles.text} ${
            active ?
              linkStyles.activeText :
              linkStyles.inactiveText
          }`}>
        {intl.formatMessage({ id: content })}
        {active && (
          <div
            className={linkStyles.activeBottomBar}
          />
        )}
      </h3>
    )
    const link = (
      <Link
        className={active ?
        linkStyles.activeContainer :
          linkStyles.inactiveContainer
        }
        to={to}
      >
        {element}
      </Link>
    )
    if (dropdown) {
      console.log({dropdown})
      return (
        <Popup
          content={dropdown}
          hoverable
          position="bottom center"
          positionFixed
          trigger={link}
        />
      )
    }
    return link
  }
}

export default injectIntl(LayoutHeaderMenuLink);
