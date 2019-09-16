import React, { Component } from "react"

import Layout from '../components/layout';
import Header from '../components/projects/header';
import ProjectList from '../components/projects/projectList';
import FeaturedProject from '../components/projects/featuredProject';
import { graphql, StaticQuery } from "gatsby"

class Projects extends Component {
  render() {
    const { data } = this.props;
    const projects = data.allDataJson.edges[0].node.projects;
    const featuredProject = projects.find(project => project.featured === true);

    return (
      <Layout>
        { () => (
          <div>
            <Header />
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
    render={data => <Projects data={data} {...props} />}
  />
);

