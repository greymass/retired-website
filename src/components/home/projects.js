import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import {
  Icon,
  Grid,
  // Responsive
} from 'semantic-ui-react';

import { graphql, Link, StaticQuery } from 'gatsby';
import HomeProjectCard from './projects/card';

import projectsBackgroundForDesktop from '../../images/projectsBackgroundForDesktop.svg';
// import projectsBackgroundForMobile from '../../images/projectsBackgroundForMobile.svg';

import homeProjectsStyles from './projects.module.css';

class HomeProjects extends Component {
  render() {
    const { data, intl } = this.props;
    const projects = data.allDataJson.edges[0].node.projects;
    // TODO: Responsive logic needs reworking
    // <Responsive {...Responsive.onlyMobile}>
    //   <img
    //     alt='projects-page-background-mobile'
    //     src={projectsBackgroundForMobile}
    //     className={homeProjectsStyles.image}
    //   />
    // </Responsive>
    // <Responsive minWidth={Responsive.onlyTablet.minWidth}>
    //   <img
    //     alt='projects-page-background-desktop'
    //     src={projectsBackgroundForDesktop}
    //     className={homeProjectsStyles.image}
    //   />
    // </Responsive>
    return (
      <div>
        <div className={homeProjectsStyles.arrowDownContainer}>
          <Icon name="arrow down" className={homeProjectsStyles.arrowDownIcon} />
          <img
            alt='projects-page-background-desktop'
            src={projectsBackgroundForDesktop}
            className={homeProjectsStyles.image}
          />
        </div>

        <div className={homeProjectsStyles.container}>
          <p className={homeProjectsStyles.headerText}>
            {intl.formatMessage({ id: 'home_projects_title' })}
          </p>

          <Grid stackable centered padded>
            {projects.slice(0, 4).map(project => {
              const imageFluidEdge = data.images.edges.find(edge => {
                return edge.node
                  .childImageSharp
                  .fluid
                  .src
                .includes(project.projectKey)
              })
              const imageFluid =
                imageFluidEdge && imageFluidEdge.node.childImageSharp.fluid;
              return (
                <HomeProjectCard
                  key={project.projectKey}
                  icon={project.icon}
                  imageAlt={`${project.projectKey}-image`}
                  imageFluid={imageFluid}
                  linkTo={project.githubLink}
                  text={`project_${project.projectKey}_name`}
                />
              )
            })}
          </Grid>
          <div className={homeProjectsStyles.portfolioContainer}>
            <Link className={homeProjectsStyles.supportUsLink} to={`/projects`}>
              {intl.formatMessage({ id: 'home_projects_portfolio_link' })}
              <Icon name="arrow right" style={{ marginLeft: '5px'}} />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const HomeProjectsWrapper = injectIntl(HomeProjects);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: {projects: {elemMatch: {projectKey: {ne: null}}}}) {
          edges {
            node {
              projects {
                featured
                githubLink
                icon
                platform
                projectKey
              }
            }
          }
        }
        images: allFile(filter: {relativeDirectory: {regex: "/projects/"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
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
