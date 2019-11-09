import React, { Component } from "react"

import { Header, Grid, Icon } from 'semantic-ui-react';

import { Link } from 'gatsby';

import { injectIntl } from "gatsby-plugin-intl";

import Img from 'gatsby-image';

import featuredProjectStyles from './featuredProject.module.css';

class FeaturedProject extends Component {
  render() {
    const {
      images,
      intl,
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
          <Grid.Column only="computer" computer={2} />
          <Grid.Column mobile={16} tablet={16} computer={6} >
            <Header
              className={featuredProjectStyles.nameText}
              inverted
              size="huge"
            >
              {intl.formatMessage({ id: `project_${project.projectKey}_name` })}
              <Header.Subheader>
                {intl.formatMessage({ id: `project_${project.projectKey}_extra` })}
              </Header.Subheader>
            </Header>
            <p className={featuredProjectStyles.paragraphText}>
              {intl.formatMessage({ id: `project_${project.projectKey}_description` })}
            </p>
            <Link className={featuredProjectStyles.linkText} to={`/support`}>
              {intl.formatMessage({ id: 'projects_featured_see_on_github' })}
              <Icon name="arrow right" style={{ marginLeft: '5px' }} />
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default injectIntl(FeaturedProject);
