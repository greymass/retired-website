import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import {
  Card,
  Container,
} from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';

import HomeProjectCard from './card';
import styles from './cards.module.css';

class HomeProjectsCards extends Component {
  render() {
    const {
      cards,
      data,
    } = this.props;
    const projects = data.projects.edges;

    return (
      <Container
        className={styles.container}
        fluid
        textAlign="center"
      >
        <Card.Group className={styles.cardContainer} centered>
          {projects.slice(0, cards).map(({ node: project }) => {
            const imageFluidEdge = data.images.edges.find(edge => {
              return edge.node
              .childImageSharp
              .fluid
              .src
              .includes(project.projectKey)
            })
            const imageFluid = imageFluidEdge && imageFluidEdge.node.childImageSharp.fluid;
            return (
              <HomeProjectCard
                image={(imageFluid) ? imageFluid : false}
                project={project}
              />
            )
          })}
        </Card.Group>
      </Container>
    )
  }
}

HomeProjectsCards.defaultProps = {
  cards: 4,
}

const HomeProjectsCardsWrapper = injectIntl(HomeProjectsCards);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        projects: allProjectsJson(filter: { homepage: { eq: true } }) {
          edges {
            node {
              homepage
              githubLink
              icon
              platform
              projectKey
            }
          }
        }
        images: allFile(
          filter: {relativeDirectory: {regex: "/projects/"},
          extension: {regex: "/(jpg)|(jpeg)|(png)/"}}
        ) {
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
    render={data => <HomeProjectsCardsWrapper data={data} {...props} />}
  />
);
