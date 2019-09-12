import React, { Component } from "react"

import { Icon, Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';
import HomeProjectCard from './projects/card';

import homeAboutBackground from '../../images/homeAboutBackground.svg';

import homeProjectsStyles from './projects.module.css';

class HomeProjects extends Component {
  render() {
    const { data, t } = this.props;

    return (
      <div>
        <div className={homeProjectsStyles.arrowDownContainer}>
          <Icon name="arrow down" className={homeProjectsStyles.arrowDownIcon} />
          <img
            alt='projects-page-background'
            src={homeAboutBackground}
            style={{ width: '100%' }}
          />
        </div>

        <div className={homeProjectsStyles.container}>
          <h4 className={homeProjectsStyles.headerText}>
            {t('projects_title')}
          </h4>

          <Grid stackable centered padded>
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
              primary
              text={t('projects_primary')}
            />
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
              text={t('projects_one')}
            />
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
              text={t('projects_two')}
            />
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
              text={t('projects_three')}
            />
          </Grid>
          <div style={{ padding: '60px', paddingBottom: '80px' }}>
            <Link className={homeProjectsStyles.supportUsLink} to={`projects`}>
              {t('projects_portfolio_link')}
              <Icon name="arrow right" style={{ marginLeft: '5px'}} />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const HomeProjectsWrapper = translate('home')(HomeProjects);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {relativePath: {in: ["images/eosImage.png"]}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <HomeProjectsWrapper data={data} {...props} />}
  />
);
