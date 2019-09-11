import React, { Component } from "react"

import { Container, Icon, Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';
import HomeProjectCard from './projects/card';

import homeAboutBackground from '../../images/homeAboutBackground.svg'

class HomeProjects extends Component {
  render() {
    const { data, t } = this.props;

    const arrowDownContainerStyles = {
      height: '100px',
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    };

    const arrowDownIconStyles = {
      color: '#424954',
      left: '0',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'absolute',
      right: '0',
      top: '17px',
      fontSize: '18px',
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
      padding: '20px',
      marginBottom: '30px',
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
        <div style={arrowDownContainerStyles}>
          <Icon name="arrow down" style={arrowDownIconStyles} />
          <img
            alt='projects-page-background'
            src={homeAboutBackground}
            style={{ width: '100%' }}
          />
        </div>

        <Container style={containerStyles} basic>
          <h4 style={headerTextStyles}>
            {t('projects_title')}
          </h4>

          <Grid stackable centered padded>
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
              primary
              text={t('projects_primary')}
            />
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
              text={t('projects_one')}
            />
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
              text={t('projects_two')}
            />
            <HomeProjectCard
              icon={'github'}
              imageAlt="eos-image"
              imageFluid={data.allFile.edges[0].node.childImageSharp.fluid}
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
        allFile(filter: {relativePath: {in: ["images/eosImage.png"]}}) {
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
