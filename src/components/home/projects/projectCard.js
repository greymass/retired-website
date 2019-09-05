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

    return (
      <Grid.Column width={primary ? 4 : 3}>
        <Link to={linkTo}>
          {imageFluid && (
            <Img
              alt={imageAlt}
              fluid={imageFluid}
              style={{ height: '200px' }}
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

