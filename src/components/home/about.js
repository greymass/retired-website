import React, { Component } from "react"

import { Container, Grid, Icon } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';

import Img from 'gatsby-image';

class HomeHeader extends Component {
  render() {
    const { data, t } = this.props;

    const containerStyles = {
      backgroundColor: '#0091E2',
      paddingBottom: '50px',
      position: 'relative',
      width: '100%',
    };
    const imageContainerStyles = {
      top: 0,
      left: 0,
      position: 'absolute',
      width: '100%'
    }
    const imageStyles = {
      width: '800px',
      marginTop: '-120px',
    };
    const titleTextStyles = {
      color: 'white',
      fontFamily: 'Montserrat',
      fontSize: '66px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '0.05em',
      lineHeight: '112px',
      marginTop: '80px',
    };
    const paragraphTextStyles = {
      color: 'white',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '44px',
      letterSpacing: '0.02em',
      marginLeft: '100px',
      marginRight: '200px',
      marginBottom: '60px',
    };
    const aboutUsLinkStyle = {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '25px',
      marginLeft: '50px',
      marginTop: '50px',
      textAlign: 'center',
      textTransform: 'uppercase',
    };
    return (
      <Container style={containerStyles} basic>
        <div style={imageContainerStyles}>
          <Img
            alt='greymass-header-image'
            fluid={data.fileName.childImageSharp.fluid}
            style={imageStyles}
          />
        </div>
        <Grid stackable>
          <Grid.Column width={6} />
          <Grid.Column width={8} >
            <h4 style={titleTextStyles}>
              {t('about_title')}
            </h4>
            <h4 style={paragraphTextStyles}>
              {t('about_paragraph')}
            </h4>
            <Link style={aboutUsLinkStyle} to={`#support-us`}>
              {t('about_link')}
              <Icon name="arrow right" style={{ marginLeft: '5px' }} />
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const HomeHeaderWrapper = translate('home')(HomeHeader);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/greymassBackground.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HomeHeaderWrapper data={data} {...props} />}
  />
);
