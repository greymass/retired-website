import React, { Component } from "react"
import { Grid, Icon, Container } from 'semantic-ui-react';

import { graphql, Link, StaticQuery } from 'gatsby';
import { injectIntl } from "gatsby-plugin-intl";

import Img from 'gatsby-image';

import homeAboutStyles from './about.module.css';

class HomeHeader extends Component {
  render() {
    const { data, intl } = this.props;
    return (
      <div className={homeAboutStyles.container}>
        <Container>
          <div className={homeAboutStyles.imageContainer}>
            <Img
              alt='greymass-header-image'
              fluid={data.fileName.childImageSharp.fluid}
              className={homeAboutStyles.image}
            />
          </div>
          <Grid>
            <Grid.Column mobile={16} tablet={6} computer={6} />
            <Grid.Column mobile={16} tablet={10} computer={9}>
              <h4 className={homeAboutStyles.titleText}>
                {intl.formatMessage({ id: 'home_about_title' })}
              </h4>
              <p className={homeAboutStyles.paragraphText}>
                {intl.formatMessage({ id: 'home_about_paragraph_one' })}
              </p>
              <p className={homeAboutStyles.paragraphText}>
                {intl.formatMessage({ id: 'home_about_paragraph_two' })}
              </p>
              <Link className={homeAboutStyles.aboutUsLink} to={`/support`}>
                {intl.formatMessage({ id: 'home_about_link' })}
                {' '}
                <Icon name="arrow right" className={homeAboutStyles.icon} />
              </Link>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

const HomeHeaderWrapper = injectIntl(HomeHeader);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "greymassBackground.png" }) {
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
