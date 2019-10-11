import React, { Component } from "react"

import { Link } from 'gatsby';

import { translate } from 'react-i18next';

import Img from 'gatsby-image';
import { Header } from 'semantic-ui-react';
import projectCardStyles from './card.module.css';

class ProjectCard extends Component {
  render() {
    const {
      images,
      primary,
      project,
      t,
    } = this.props;

    const {
      linkTo,
      projectKey,
    } = project;

    const image =
      images.edges.find(edge => edge.node.childImageSharp.fluid.src.includes(projectKey));

    return (
      <div className={`${projectCardStyles.container } ${
        primary ?
          projectCardStyles.primaryContainer :
          projectCardStyles.secondaryContainer
      }`}>
        <Link to={linkTo}>
          {image && (
            <Img
              alt={projectKey}
              fluid={image.node.childImageSharp.fluid}
              className={projectCardStyles.image}
            />
          )}

          <div className={projectCardStyles.bottomContainer}>
            <Header
              content={t(`project_${projectKey}_name`)}
              inverted
              size="large"
              textAlign="center"
            />
            <p className={projectCardStyles.text}>
              {t(`project_${projectKey}_description`)}
            </p>
          </div>
        </Link>
      </div>
    )
  }
}

export default translate('projects')(ProjectCard)
