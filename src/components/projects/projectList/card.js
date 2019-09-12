import React, { Component } from "react"

import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

import Img from 'gatsby-image';

import homeProjectCardStyles from './card.module.css';

export default class HomeProjectCard extends Component {
  render() {
    const {
      imageAlt,
      imageFluid,
      linkTo,
      primary,
      text,
    } = this.props;

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

          <Container
            className={
              `${homeProjectCardStyles.bottomContainer} ${
                primary ? homeProjectCardStyles.primaryBottomContainer : ''
              }`
            }
          >
            <h4 className={homeProjectCardStyles.text}>
              {text}
            </h4>
          </Container>
        </Link>
      </Grid.Column>
    )
  }
}
