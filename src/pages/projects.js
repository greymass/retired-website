import React, { Component } from 'react';

import { graphql, StaticQuery } from 'gatsby';
import { translate } from 'react-i18next';

import Layout from '../components/layout';
import SharedHeader from '../components/shared/header';
import ProjectList from '../components/projects/projectList';
import FeaturedProject from '../components/projects/featuredProject';

class Projects extends Component {
  render() {
    const { data, t } = this.props;
    const projects = data.allDataJson.edges[0].node.projects;
    const featuredProject = projects.find(project => project.featured === true);

    return (
      <Layout>
        { () => (
          <div>
            <SharedHeader
              title={t('header_title')}
              paragraph={t('header_paragraph')}
            />
            <ProjectList images={data.images} projects={projects} platform="eos" primary />
            <FeaturedProject images={data.images} project={featuredProject} projectKey="anchor" />
            <ProjectList images={data.images} projects={projects} platform="steem" />
            <ProjectList images={data.images} projects={projects} platform="others" />
          </div>
        )}
      </Layout>
    )
  }
}

const ProjectsWrapper = translate('projects')(Projects);

export default props => (
  <StaticQuery
    query={graphql`
       query {
          allDataJson(filter: {projects: {elemMatch: {name: {ne: null}}}}) {
            edges {
              node {
                projects {
                  description
                  featured
                  githubLink
                  name
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
    render={data => <ProjectsWrapper data={data} {...props} />}
  />
);

