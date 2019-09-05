import React, { Component } from "react";

import { Menu } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import LayoutHeaderLink from './header/link';

class Header extends Component {
  render() {
    const { data, t } = this.props;

    const activeItem = window.location.pathname.split('/')[1];

    const imageContainerStyles = {
      backgroundColor: '#0091E2',
      borderRadius: '5px',
      width: '60px',
      height: '54px',
      padding: '10px',
      marginTop: '10px',
    };

    const supportUsButtonStyle = {
      border: '1px solid #0091E2',
      padding: '20px',
      paddingBottom: '10px',
      paddingTop: '10px',
      marginTop: '15px',
    };

    const supportUsTextStyle = {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '15px',
      lineHeight: '25px',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    };

    return (
      <Menu secondary>
        <Menu.Item>
          <Link to={`/`}>
            <div style={imageContainerStyles}>
              <Img
                fluid={data.fileName.childImageSharp.fluid}
                alt="logo"
              />
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <LayoutHeaderLink
            active={activeItem === ''}
            content={t('home')}
            to={`/`}
          />
        </Menu.Item>
        <Menu.Item>
          <LayoutHeaderLink
            active={activeItem === 'about'}
            content={t('about')}
            to={`about`}
          />
        </Menu.Item>
        <Menu.Item>
          <LayoutHeaderLink
            active={activeItem === 'projects'}
            content={t('projects')}
            to={`projects`}
          />
        </Menu.Item>
        <Menu.Item>
          <LayoutHeaderLink
            active={activeItem === 'blog'}
            content={t('blog')}
            to={`blog`}
          />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to={`support_us`}>
              <div style={supportUsButtonStyle}>
                <h3 style={supportUsTextStyle}>
                  {t('support_us')}
                </h3>
              </div>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const HeaderWrapper = translate('layout')(Header);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/greymassLogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 288, maxHeight: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderWrapper data={data} {...props} />}
  />
);


