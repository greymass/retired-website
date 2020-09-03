import React, { Component } from "react";

import { Sidebar, Menu } from "semantic-ui-react";
import VoteUsButton from "../../shared/buttons/voteUs";

import SharedDropdownsTransitSessions from "../../shared/dropdowns/transit/sessions";
import LayoutHeaderSidebarLink from "./sidebar/link";

import sidebarStyles from "./sidebar.module.css";

class HeaderMobileSidebar extends Component {
  render() {
    const { navbarItems, sidebarVisible } = this.props;

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
          {navbarItems.map((navbarItem, index) => (
            <Menu.Item key={index}>
              <LayoutHeaderSidebarLink navbarItem={navbarItem} />
            </Menu.Item>
          ))}
          <Menu.Item>
            <VoteUsButton />
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
