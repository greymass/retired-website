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
      intl
      } = this.props;
    const projects = data.allDataJson.edges[0].node.projects;
    return (
      <Container
        className={styles.container}
        fluid
        textAlign="center"
      >
        <Card.Group className={styles.cardContainer} centered>
          {projects.slice(0, cards).map(project => {
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
                image={(imageFluid) ? imageFluid.src : false}
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
    render={data => <HomeProjectsCardsWrapper data={data} {...props} />}
  />
);
