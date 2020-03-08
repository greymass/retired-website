import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import { graphql } from 'gatsby';
import { Container, Header, Table } from 'semantic-ui-react';

import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';

import projectStyles from './projects.module.css';

class Projects extends Component {
  render() {
    const { data, intl, location } = this.props;
    const projects = data.projects.edges.map(({ node }) => node);

    const sortedProjects = projects.sort((projectA, projectB) => {
      const projectTitleA =
        intl.formatMessage({ id: `project_${projectA.projectKey}_name` }) || '';
      const projectTitleB =
        intl.formatMessage({ id: `project_${projectB.projectKey}_name` }) || '';

      if (projectTitleA.toLowerCase() > projectTitleB.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    })

    return (
      <Layout location={location}>
        <SharedHeader
          title={intl.formatMessage({ id: 'platform_header_title' })}
          paragraph={intl.formatMessage({ id: 'platform_header_paragraph' })}
        />
        <Container className={projectStyles.container}>
          <Table size="large">
            {sortedProjects.map((project) => (
              <Table.Row>
                <Table.Cell width={4}>
                  <Header
                    as="a"
                    href={project.link || project.githubLink}
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
    projects: allProjectsJson(limit: 100, sort: {fields: projectKey}) {
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
