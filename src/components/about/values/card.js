import React, { Component } from "react"

import {
  Container,
  Grid,
  Icon,
  Popup,
} from 'semantic-ui-react';

export default class AboutValuesCard extends Component {
  state = { expanded: false };

  render() {
    const {
      iconName,
      description,
      title,
    } = this.props;


    const titleStyles = {

    };

    const descriptionStyles = {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '22px',
      textAlign: 'center',
    };

    const containerStyles = {
      background: active ? '#0091E2' : 'white',
      border: active ? '6px solid white' : '',
      borderRadius: '50%',
      margin: '10px',
      padding: '30px 12px 18px 16px',
    };

    return (
      <Grid.Column width={primary ? 4 : 3}>
        <div style={containerStyles}>
          <Icon
            name={iconName}
            style={{
              fontSize: '30px',
              color: active ? 'white' : '#343941'
            }}
          />
          <h2 style={titleStyles}>
            {title}
            <Popup
              trigger={<Icon name="info circle" />}
            >
              <Container>
                <h2 style={titleStyles}>
                  {title}
                </h2>
                <p style={descriptionStyles}>
                  {description}
                </p>
              </Container>
            </Popup>
          </h2>
        </Link>
      </Grid.Column>
    )
  }
}
