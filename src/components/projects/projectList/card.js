import React, { Component } from "react"

import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

import Img from 'gatsby-image';

import homeProjectCardStyles from './card.module.css';

export default class HomeProjectCard extends Component {
  render() {
    const {
      linkTo,
      projectKey,
      text,
    } = this.props;

    const image =
      images.edges.find(edge => edge.node.childImageSharp.fluid.src.includes(projectKey));

    return (
      <div>
        <Link to={linkTo}>
          {image && (
            <Img
              alt={projectKey}
              fluid={image.node.childImageSharp.fluid}
              style={{ height: '200px' }}
            />
          )}

          <Container
            className={homeProjectCardStyles.bottomContainer}
          >
            <h4 className={homeProjectCardStyles.text}>
              {text}
            </h4>
          </Container>
        </Link>
      </div>
    )
  }
}
