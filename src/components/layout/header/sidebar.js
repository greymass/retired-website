import React, { Component } from 'react';



import { Sidebar, Menu } from 'semantic-ui-react';

import { Link } from 'gatsby';

import mobileHeaderSidebarStyles from './sidebar.module.css';
import SupportUsButton from '../../shared/buttons/supportUs';

import SharedDropdownsTransitSessions from '../../shared/dropdowns/transit/sessions';
import LayoutHeaderMenuLink from "./menu"

class HeaderMobileSidebar extends Component {
  render() {
    const {
      navbarItems,
      sidebarVisible,
    } = this.props;

    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        items={navbarItems}
        vertical
        visible={sidebarVisible}
      >
        {navbarItems.map(navbarItem => (
          <Menu.Item dropdown={navbarItem.dropdown}>
            <Link className={mobileHeaderSidebarStyles.linkText} to={navbarItem.as}>
              {navbarItem.content}
            </Link>
          </Menu.Item>
        ))}
        <Menu.Item>
          <SupportUsButton />
        </Menu.Item>
        <Menu.Item>
          <SharedDropdownsTransitSessions />
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default HeaderMobileSidebar;
