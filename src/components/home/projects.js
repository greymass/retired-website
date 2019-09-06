import React, { Component } from "react"

import { Container, Icon, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import HomeProjectsCard from "./projects/card"

class HomeProjects extends Component {
  render() {
    const { data, t } = this.props;

    const arrowStyles = {
      margin: 'auto',
      width: '150px',
    };

    const containerStyles = {
      backgroundColor: 'white',
      textAlign: 'center',
      width: '100%',
    };

    const headerTextStyles = {
      color: '#424954',
      fontFamily: 'Montserrat',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      padding: '40px',
    };

    const supportUsLinkStyles = {
      color: '#0091E2',
      fonSize: '21px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '25px',
      textTransform: 'uppercase',
    };
    return (
      <div>
        <Img
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt='arrow-down'
          style={arrowStyles}
        />

        <Container style={containerStyles} basic>
          <h4 style={headerTextStyles}>
            {t('projects_title')}
          </h4>

          <Grid stackable centered padded>
            <HomeProjectsCard
              icon="github alternate"
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[1].node.childImageSharp.fluid}
              primary
              text={t('projects_primary')}
            />
            <HomeProjectsCard
              icon="github alternate"
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[1].node.childImageSharp.fluid}
              text={t('projects_one')}
            />
            <HomeProjectsCard
              icon="github alternate"
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[1].node.childImageSharp.fluid}
              text={t('projects_two')}
            />
            <HomeProjectsCard
              icon="github alternate"
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[1].node.childImageSharp.fluid}
              text={t('projects_three')}
            />
          </Grid>

          <div style={{ padding: '60px', paddingBottom: '80px' }}>
            <Link style={supportUsLinkStyles} to={`projects`}>
              {t('projects_portfolio_link')}
              <Icon name="arrow right" style={{ marginLeft: '5px'}} />
            </Link>
          </div>
        </Container>
      </div>
    )
  }
}

const HomeProjectsWrapper = translate('home')(HomeProjects);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {relativePath: {in: ["images/arrowDown.png", "images/eosImage.png"]}}) {
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
