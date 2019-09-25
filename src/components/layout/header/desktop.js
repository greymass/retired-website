import React, { Component } from 'react';

import { translate } from 'react-i18next';
import { Menu } from 'semantic-ui-react';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

import LayoutHeaderLink from './shared/link';

import headerStyles from '../header.module.css';

class HeaderDesktop extends Component {
  render() {
    const {
      activeItem,
      data,
      navbarItems,
      t
    } = this.props;

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
    );
  }
}

export default translate('layout')(HeaderDesktop);
