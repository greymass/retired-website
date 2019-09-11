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
      fontWeight: '600',
      fontSize: '28px',
      lineHeight: '44px',
      textAlign: 'center',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    };

    const iconContainerStyles = {
      backgroundColor: '#424954',
      borderRadius: '50%',
      margin: 'auto',
      padding: '90px 50px',
      height: '200px',
      width: '200px',
    };

    const popupIconStyles = {
      color: '#0091E2',
      cursor: 'pointer',
      fontSize: '25px',
      marginLeft: '5px',
    };

    const popupStyles = {
      opacity: '0.9',
      backgroundColor: '#0091E2',
      // Will need to add "popup:backgroundColor: '#0091E2'" for the arrow to get styled;
    };

    const popupContainerStyles = {
      padding: '20px',
      width: '400px',
    };

    const popupTitleStyles = {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '28px',
      lineHeight: '44px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'white',
      textAlign: 'left',
    };

    const popupDescriptionStyles = {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '22px',
      textAlign: 'left',
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
            trigger={<Icon style={popupIconStyles} name="info circle" />}
            style={popupStyles}
          >
            <Container style={popupContainerStyles} basic>
              <h2 style={popupTitleStyles}>
                {title}
              </h2>
              <p style={popupDescriptionStyles}>
                {description}
              </p>
            </Container>
          </Popup>
        </h2>
      </Grid.Column>
    )
  }
}
