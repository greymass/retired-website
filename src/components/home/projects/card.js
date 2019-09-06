import React, { Component } from "react"

import { Container, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

import Img from 'gatsby-image';

export default class HomeProjectCard extends Component {
  render() {
    const {
      icon,
      imageAlt,
      imageFluid,
      linkTo,
      primary,
      text,
    } = this.props;

    const bottomContainerStyles = {
      backgroundColor: primary ? '#0091E2' : '#B6BDC9',
      padding: '20px',
      paddingTop: '50px',
      paddingBottom: '50px'
    }

    const textStyles = {
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
      backgroundColor: primary ? '#0091E2' : 'white',
      border: primary ? '' : '1px solid #B6BDC9',
      color: primary ? 'white' : '#0091E2',
      fontSize: '25px',
      height: '40px',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '40px',
      zIndex: 1000,
      padding: 'auto',
    };

    return (
      <Grid.Column width={primary ? 4 : 3}>
        <Link to={linkTo}>
          {imageFluid && (
            <div style={{ position: 'relative' }}>
              <div style={iconContainerStyles}>
                <Icon name={icon} style={{ margin: '5px', marginTop: '10px' }} />
              </div>
              <Img
                alt={imageAlt}
                fluid={imageFluid}
                style={{ height: '200px' }}
              />
            </div>
          )}

          <Container style={bottomContainerStyles}>
            <h4 style={textStyles}>
              {text}
            </h4>
          </Container>
        </Link>
      </Grid.Column>
    )
  }
}

