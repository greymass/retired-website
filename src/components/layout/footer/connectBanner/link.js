import React, { Component } from 'react';

import { Link } from 'gatsby';
import { Icon } from 'semantic-ui-react';

import linkStyles from './link.module.css';

class LayoutHeaderLink extends Component {
  state = {
    active: false
  };

  render() {
    const {
      type,
      to,
    } = this.props;

    const { active } = this.state;

    return (
      <a
        className={
          `${linkStyles.container} ${
            active ?
              linkStyles.activeContainer :
              linkStyles.inactiveContainer
          }`
        }
        onMouseEnter={() => this.setState({ active: true})}
        onMouseLeave={() => this.setState({ active: false})}
        href={to}
      >
        <Icon
          name={type}
          className={
            `${linkStyles.linkIcon} ${
              active ? linkStyles.activeLinkIcon : linkStyles.inactiveLinkIcon
            }`
          }
        />
      </a>
    )
  }
}

export default LayoutHeaderLink;
