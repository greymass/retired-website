import React, { Component } from 'react';



import { Icon, Sidebar, Menu, Image, Container } from "semantic-ui-react"

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import mobileHeaderMenuStyles from './menu.module.css';
import sharedHeaderStyles from './shared.module.css';
import Logo from "../../../images/greymass-logo-white.png"
import LayoutHeaderMenuLink from './menu/link';
import SupportUsButton from '../../shared/buttons/supportUs';

class HeaderMobileMenu extends Component {
  render() {
    const {
      activeItem,
      navbarItems,
      sidebarVisible,
    } = this.props;

    return (
      <Sidebar.Pusher
        dimmed={sidebarVisible}
        onClick={this.props.handlePusher}
        className={mobileHeaderMenuStyles.sidebarPusher}
      >
        <Container className={sharedHeaderStyles.container}>
          <div
            className={sharedHeaderStyles.topMenuBar}
          />
          <Menu secondary>
            <Menu.Item>
              <Link
                className={sharedHeaderStyles.imageContainer}
                to={`/`}
              >
                <Image
                  alt="Greymass Logo"
                  centered
                  className={sharedHeaderStyles.image}
                  src={Logo}
                  verticalAlign="middle"
                />
              </Link>
            </Menu.Item>

            {navbarItems.map(navbarItem => (
              <Menu.Item key={navbarItem.as}>
                <LayoutHeaderMenuLink
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
      </Sidebar.Pusher>
    );
  }
}

export default HeaderMobileMenu;
