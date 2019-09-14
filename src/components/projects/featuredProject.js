import React, { Component } from "react"

import { Grid, Icon } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';

import Img from 'gatsby-image';

import featuredProjectStyles from './featuredProject.module.css';

class FeaturedProject extends Component {
  render() {
    const { data, t } = this.props;

    return (
      <div className={featuredProjectStyles.container}>
        <Grid stackable>
          <Grid.Column width={6} >
            <Img
              alt='greymass-header-image'
              fluid={data.fileName.childImageSharp.fluid}
              className={featuredProjectStyles.image}
            />
          </Grid.Column>
          <Grid.Column width={8} >
            <h4 className={featuredProjectStyles.titleText}>
              {t('projects_featured_title')}
            </h4>
            <h4 className={featuredProjectStyles.paragraphText}>
              {t('projects_featured_description')}
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

const FeaturedProjectWrapper = translate('home')(FeaturedProject);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/anchor.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <FeaturedProjectWrapper data={data} {...props} />}
  />
);
