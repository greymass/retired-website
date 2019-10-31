import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
import { Card, Image } from 'semantic-ui-react';

import { graphql, StaticQuery } from "gatsby"

class HomeProjectCard extends Component {
  render() {
    const {
      data,
      intl,
      project,
    } = this.props;

    let {
      image
    } = this.props;

    const linkTo = project.link || project.githubLink;

    image = image || data.placeholderImage.childImageSharp.fluid.src;

    return (
      <Card
        as="a"
        href={linkTo}
      >
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {intl.formatMessage({
              id: `project_${project.projectKey}_name`,
              defaultMessage: '[Project Name]',
              description: 'The name of the project'
            })}
          </Card.Header>
          <Card.Meta>
            {intl.formatMessage({
              id: `project_${project.projectKey}_extra`,
              defaultMessage: '[Project Extras]',
              description: 'Extra details of the project'
            })}
          </Card.Meta>
          <Card.Description>
            {intl.formatMessage({
              id: `project_${project.projectKey}_description`,
              defaultMessage: '[Project Description]',
              description: 'The date the project launched'
            })}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
};

const HomeProjectCardWrapper = injectIntl(HomeProjectCard)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(name: {eq: "projectPlaceholder"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HomeProjectCardWrapper data={data} {...props} />}
  />
);
