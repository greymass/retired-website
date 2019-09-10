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

    const iconContainerStyles = {
      backgroundColor: '#424954',
      borderRadius: '50%',
      margin: '10px',
      padding: '30px 12px 18px 16px',
    };

    return (
      <Grid.Column width={4}>
        <div style={iconContainerStyles}>
          <Icon
            name={iconName}
            style={{
              fontSize: '30px',
              color: 'white',
            }}
          />
        </div>
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
      </Grid.Column>
    )
  }
}
