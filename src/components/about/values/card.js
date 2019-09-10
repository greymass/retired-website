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
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '28px',
      lineHeight: '44px',
      textAlign: 'center',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
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
      margin: 'auto',
      padding: '90px 50px',
      height: '200px',
      width: '200px',
    };

    return (
      <Grid.Column width={4}>
        <div style={iconContainerStyles}>
          <Icon
            name={iconName}
            style={{
              fontSize: '90px',
              color: 'white',
            }}
          />
        </div>
        <h2 style={titleStyles}>
          {title}
          <Popup
            trigger={<Icon style={{ marginLeft: '5px' }} name="info circle" />}
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
