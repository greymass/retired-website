import React, { Component } from "react";

import { Link } from "gatsby";

class LayoutHeaderLink extends Component {
  render() {
    const {
      active,
      content,
      to,
    } = this.props;

    const containerStyles = {
      padding: active ? '13px' : '10px',
      paddingBottom: '0px',
    };

    const textStyles = {
      fontFamily:  'Roboto',
      fontStyle: 'normal',
      fontWeight: active ? 'bold' : 'normal',
      fontSize: '18px',
      lineHeight: '25px',
      letterSpacing: '0.02em',
      marginBottom: '5px',
      textTransform: 'uppercase',
    };

    return (
      <div style={containerStyles}>
        <Link to={to}>
          <h3 style={textStyles}>
            {content}
          </h3>
          {active && (
            <div
              style={{
                backgroundColor: '#0091E2',
                borderRadius: '2px',
                height: '4px',
                width: '100%',
              }}
            />
          )}
        </Link>
      </div>
    )
  }
}

export default LayoutHeaderLink;


