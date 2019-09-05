import React, { Component } from "react"

import { Container, Icon, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import HomeProjectCard from "./projects/projectCard"

class HomeProjects extends Component {
  render() {
    const { data, t } = this.props;

    const arrowStyles = {
      margin: 'auto',
      width: '150px',
    }

    const containerStyles = {
      backgroundColor: 'white',
      padding: '40px',
      textAlign: 'center',
      width: '100%',
    }

    const headerTextStyles = {
      color: '#424954',
      fontFamily: 'Montserrat',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '0.02em',
      lineHeight: '44px',
    }

    const supportUsLinkStyles = {
      color: '#0091E2',
      fonSize: '21px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '25px',
      textTransform: 'uppercase',
    }

    return (
      <div>
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          alt='arrow-down'
          style={arrowStyles}
        />

        <Container style={containerStyles} basic>
          <h4 style={headerTextStyles}>
            {t('projects_title')}
          </h4>

          <Grid centered>
            <HomeProjectCard
              icon={'eos'}
              imageAlt="eos-image"
              imageSrc={'eos-image'}
              primary
              text={t('projects_main')}
            />
            <HomeProjectCard
              icon={'eos'}
              imageAlt="eos-image"
              imageSrc={'eos-image'}
              text={t('projects_one')}
            />
            <HomeProjectCard
              icon={'steem'}
              imageAlt="eos-image"
              imageSrc={'steem-image'}
              text={t('projects_two')}
            />
            <HomeProjectCard
              icon={'steem'}
              imageAlt="eos-image"
              imageSrc={'steem-image'}
              text={t('projects_three')}
            />
          </Grid>

          <Link style={supportUsLinkStyles} to={`projects`}>
            {t('projects_portfolio_link')}
            <Icon name="arrow right" style={{ marginLeft: '5px'}} />
          </Link>
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
        fileName: file(relativePath: { eq: "images/arrowDown.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HomeProjectsWrapper data={data} {...props} />}
  />
);
