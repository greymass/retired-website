import React, { Component } from 'react';



import { Sidebar, Menu } from 'semantic-ui-react';
import SupportUsButton from '../../shared/buttons/supportUs';

import SharedDropdownsTransitSessions from '../../shared/dropdowns/transit/sessions';
import LayoutHeaderSidebarLink from './sidebar/link';

import sidebarStyles from './sidebar.module.css';


class HeaderMobileSidebar extends Component {
  render() {
    const {
      navbarItems,
      sidebarVisible,
    } = this.props;

    return (
      <div className={sidebarStyles.container}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          items={navbarItems}
          vertical
          visible={sidebarVisible}
        >
          {navbarItems.map(navbarItem => (
            <Menu.Item>
              <LayoutHeaderSidebarLink navbarItem={navbarItem} />
            </Menu.Item>
          ))}
          <Menu.Item>
            <SupportUsButton />
          </Menu.Item>
          <Menu.Item>
            <SharedDropdownsTransitSessions />
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

export default HeaderMobileSidebar;
