import React, { Component } from "react"

import { graphql, Link, StaticQuery } from "gatsby"

import { translate } from 'react-i18next';

import Img from 'gatsby-image';
import { Header } from 'semantic-ui-react';
import projectCardStyles from './card.module.css';

class ProjectCard extends Component {
  render() {
    const {
      data,
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
          <Img
            alt={projectKey}
            fluid={
              image ?
                image.node.childImageSharp.fluid :
                data.fileName.childImageSharp.fluid
            }
            className={projectCardStyles.image}
          />

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

const ProjectCardWrapper = translate('projects')(ProjectCard)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/projectPlaceholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <ProjectCardWrapper data={data} {...props} />}
  />
);
