import React, { Component } from "react"

import { Container } from 'semantic-ui-react';
import { Link } from 'gatsby';

import { translate } from 'react-i18next';

import Img from 'gatsby-image';

import homeProjectCardStyles from './card.module.css';

class ProjectCard extends Component {
  render() {
    const {
      images,
      project,
    } = this.props;

    const {
      description,
      linkTo,
      projectKey,
    } = project;

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
              {description}
            </h4>
          </Container>
        </Link>
      </div>
    )
  }
}

export default translate('projects')(ProjectCard)
