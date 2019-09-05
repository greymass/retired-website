import React, { Component } from "react"

import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

import Img from 'gatsby-image';

export default class HomeProjectCard extends Component {
  render() {
    const {
      imageAlt,
      imageFluid,
      linkTo,
      primary,
      text,
    } = this.props;

    const bottomContainer = {
      backgroundColor: '#0091E2',
      padding: '20px'
    }

    const textStyles = {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: '21px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '25px',
      textAlign: 'center',
    };

    const linkStyles = {

    }

    return (
      <Grid.Column width={primary ? 3 : 2}>
        <Link style={linkStyles} to={linkTo}>
          {imageFluid && (
            <Img
              fluid={imageFluid}
              alt={imageAlt}
            />
          )}

          <Container style={bottomContainer}>
            <h4 style={textStyles}>
              {text}
            </h4>
          </Container>
        </Link>
      </Grid.Column>
    )
  }
}

