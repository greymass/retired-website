import React, { Component } from "react"

import { Header, Grid, Icon } from 'semantic-ui-react';

import { Link } from 'gatsby';

import Img from 'gatsby-image';

import featuredProjectStyles from './featuredProject.module.css';

class FeaturedProject extends Component {
  render() {
    const {
      images,
      project,
    } = this.props;

    const image =
      images.edges.find(edge => edge.node.childImageSharp.fluid.src.includes(project.projectKey));

    return (
      <div className={featuredProjectStyles.container}>
        <Grid container>
          <Grid.Column mobile={16} tablet={16} computer={1} />
          <Grid.Column mobile={16} tablet={16} computer={6} >
            {image && (
              <Img
                alt='greymass-header-image'
                fluid={image.node.childImageSharp.fluid}
                className={featuredProjectStyles.image}
              />
            )}
          </Grid.Column>
          <Grid.Column mobile={0} tablet={0} computer={2} />
          <Grid.Column mobile={16} tablet={16} computer={6} >
            <Header
              className={featuredProjectStyles.nameText}
              inverted
              size="huge"
            >
              {`project_${project.projectKey}_name`}
              <Header.Subheader>
                {`project_${project.projectKey}_subtitle`}
              </Header.Subheader>
            </Header>
            <p className={featuredProjectStyles.paragraphText}>
              {`project_${project.projectKey}_description`}
            </p>
            <Link className={featuredProjectStyles.linkText} to={`/support`}>
              {'projects_featured_see_on_github'}
              <Icon name="arrow right" style={{ marginLeft: '5px' }} />
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default FeaturedProject;
