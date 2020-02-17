import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import { graphql } from 'gatsby';
import { Container, Header, Table } from 'semantic-ui-react';

import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';
import ProjectList from '../components/projects/projectList';
import FeaturedProject from '../components/projects/featuredProject';

class Projects extends Component {
  render() {
    const { data, intl, location } = this.props;
    const projects = data.projects.edges.map(({ node }) => node);
    const featuredProject = projects.find(project => project.projectKey === 'anchor');

    return (
      <Layout location={location}>
        <SharedHeader
          title={intl.formatMessage({ id: 'platform_header_title' })}
          paragraph={intl.formatMessage({ id: 'platform_header_paragraph' })}
        />
        {/* <ProjectList images={data.images} projects={projects} platform="eosio" primary />
        <FeaturedProject images={data.images} project={featuredProject} projectKey="anchor" />
        <ProjectList images={data.images} projects={projects} platform="steem" />
        <ProjectList images={data.images} projects={projects} platform="others" /> */}
        <Container style={{ padding: '2em 0' }}>
          <Table size="large">
            {projects.map((project) => (
              <Table.Row>
                <Table.Cell width={4}>
                  <Header
                    as="a"
                    href={project.link || project.githubLink}
                    style={{ color: '#0091E2' }}
                  >
                    {intl.formatMessage({
                      id: `project_${project.projectKey}_name`,
                      defaultMessage: '[Project Name]',
                      description: 'The name of the project'
                    })}
                    <Header.Subheader>
                      {intl.formatMessage({
                        id: `project_${project.projectKey}_extra`,
                        defaultMessage: '[Project Extras]',
                        description: 'Extra details of the project'
                      })}
                    </Header.Subheader>
                  </Header>

                </Table.Cell>
                <Table.Cell>
                  {intl.formatMessage({
                    id: `project_${project.projectKey}_description`,
                    defaultMessage: '[Project Description]',
                    description: 'The date the project launched'
                  })}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Container>
      </Layout>
    )
  }
}

export default injectIntl(Projects);

export const query = graphql`
  query {
    projects: allProjectsJson(limit: 100) {
      edges {
        node {
          githubLink
          platform
          projectKey
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
`
