import React, { Component } from "react"

import { Grid, Icon } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { Link } from 'gatsby';

import Img from 'gatsby-image';

import featuredProjectStyles from './featuredProject.module.css';

class FeaturedProject extends Component {
  render() {
    const {
      data,
      images,
      project,
      t
    } = this.props;

    const image =
      images.edges.find(edge => edge.node.childImageSharp.fluid.src.includes(project.projectKey))

    return (
      <div className={featuredProjectStyles.container}>
        <Grid stackable>
          <Grid.Column width={6} >
            {image && (
              <Img
                alt='greymass-header-image'
                fluid={image.node.childImageSharp.fluid}
                className={featuredProjectStyles.image}
              />
            )}

          </Grid.Column>
          <Grid.Column width={8} >
            <h4 className={featuredProjectStyles.titleText}>
              {t(project.title)}
            </h4>
            <h4 className={featuredProjectStyles.paragraphText}>
              {t(project.description)}
            </h4>
            <Link className={featuredProjectStyles.aboutUsLink} to={`#support-us`}>
              {t('projects_featured_see_on_github')}
              <Icon name="arrow right" style={{ marginLeft: '5px' }} />
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default translate('home')(FeaturedProject);
