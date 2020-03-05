import React, { Component } from 'react';

import { Icon, Sidebar, Menu, Image, Container } from "semantic-ui-react"
import { injectIntl } from 'gatsby-plugin-intl';

import { Link } from 'gatsby';

import Logo from "../../../images/greymass-logo-white.png"
import LayoutHeaderMenuLink from './menu/link';
import SupportUsButton from '../../shared/buttons/supportUs';

import SharedDropdownsTransitSessions from '../../shared/dropdowns/transit/sessions';

import menuStyles from './menu.module.css';

class HeaderMobileMenu extends Component {
  render() {
    const {
      activeItem,
      handleToggle,
      intl,
      navbarItems,
    } = this.props;

    return (
      <Sidebar.Pusher
        onClick={this.props.handlePusher}
      >
        <Container className={menuStyles.container}>
          <Menu secondary>
            <Menu.Item>
              <Link
                className={menuStyles.imageContainer}
                to={`/${intl.locale}`}
              >
                <Image
                  alt="Greymass Logo"
                  centered
                  className={menuStyles.image}
                  src={Logo}
                  verticalAlign="middle"
                />
              </Link>
            </Menu.Item>

            {navbarItems.map(navbarItem => (
              <Menu.Item className="mobile-hidden" key={navbarItem.as}>
                <LayoutHeaderMenuLink
                  active={activeItem === navbarItem.as}
                  content={navbarItem.content}
                  dropdown={navbarItem.dropdown}
                  to={navbarItem.as}
                />
              </Menu.Item>
            ), this)}

            <Menu.Menu position='right'>
              <Menu.Item className="mobile-hidden">
                <SharedDropdownsTransitSessions />
              </Menu.Item>
              <Menu.Item className="mobile-hidden">
                <SupportUsButton />
              </Menu.Item>

              <Menu.Item
                className={`mobile-only ${menuStyles.sidebarButton}`}
                onClick={handleToggle}
              >
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </Sidebar.Pusher>
    );
  }
}

export default injectIntl(HeaderMobileMenu);
