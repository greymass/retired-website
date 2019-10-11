import React, { Component } from "react"

import { Grid, Icon } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';

import Img from 'gatsby-image';

import homeAboutStyles from './about.module.css';

class HomeHeader extends Component {
  render() {
    const { data, t } = this.props;

    return (
      <div className={homeAboutStyles.container}>
        <div className={homeAboutStyles.imageContainer}>
          <Img
            alt='greymass-header-image'
            fluid={data.fileName.childImageSharp.fluid}
            className={homeAboutStyles.image}
          />
        </div>
        <Grid>
          <Grid.Column mobile={16} tablet={6} computer={6} />
          <Grid.Column mobile={16} tablet={10} computer={8}>
            <h4 className={homeAboutStyles.titleText}>
              {t('about_title')}
            </h4>
            <p className={homeAboutStyles.paragraphText}>
              {t('about_paragraph_one')}
            </p>
            <p className={homeAboutStyles.paragraphText}>
              {t('about_paragraph_two')}
            </p>
            <Link className={homeAboutStyles.aboutUsLink} to={`#support-us`}>
              {t('about_link')}
              {' '}
              <Icon name="arrow right" className={homeAboutStyles.icon} />
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const HomeHeaderWrapper = translate('home')(HomeHeader);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/greymassBackground.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HomeHeaderWrapper data={data} {...props} />}
  />
);
