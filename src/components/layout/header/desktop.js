import React, { Component } from 'react';

import { translate } from 'react-i18next';
import { Menu, Container } from 'semantic-ui-react';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

import LayoutHeaderLink from './desktop/link';

import sharedHeaderStyles from './shared.module.css';
import SupportUsButton from "../../shared/buttons/supportUs"

class HeaderDesktop extends Component {
  render() {
    const {
      activeItem,
      data,
      navbarItems,
      t
    } = this.props;

    return (
      <Container>
        <Menu secondary>
          <Menu.Item>
            <Link to={`/`}>
              <div className={sharedHeaderStyles.imageContainer}>
                <Img
                  fluid={data.fileName.childImageSharp.fluid}
                  alt="logo"
                />
              </div>
            </Link>
          </Menu.Item>

          {navbarItems.map(navbarItem => (
            <Menu.Item>
              <LayoutHeaderLink
                active={activeItem === navbarItem.as}
                content={navbarItem.content}
                to={navbarItem.as}
              />
            </Menu.Item>
          ), this)}

          <Menu.Menu position='right'>
            <Menu.Item>
              <SupportUsButton />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default translate('layout')(HeaderDesktop);
