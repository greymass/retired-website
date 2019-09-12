import React, { Component } from "react";

import { Menu } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import LayoutHeaderLink from './header/link';

import headerStyles from './header.module.css';

class Header extends Component {
  render() {
    const { data, t } = this.props;

    const activeItem = window.location.pathname.split('/')[1];

    return (
      <Menu secondary>
        <Menu.Item>
          <Link to={`/`}>
            <div className={headerStyles.imageContainer}>
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
              <div className={headerStyles.supportUsButton}>
                <h3 style={headerStyles.supportUsText}>
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


