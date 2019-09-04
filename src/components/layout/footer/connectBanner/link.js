import React, { Component } from 'react';

import { Link } from 'gatsby';
import { Icon } from 'semantic-ui-react'

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

    const containerStyles = {
      background: active ? '#0091E2' : 'white',
      border: active ? '6px solid white' : '',
      borderRadius: '50%',
      margin: '10px',
      padding: '30px 12px 18px 16px',
    };

    return (
      <Link
        to={to}
        style={containerStyles}
        onMouseEnter={() => this.setState({ active: true})}
        onMouseLeave={() => this.setState({ active: false})}
      >
        <Icon
          name={type}
          style={{
            fontSize: '30px',
            color: active ? 'white' : '#343941'
          }}
        />
      </Link>
    )
  }
}

export default LayoutHeaderLink;


