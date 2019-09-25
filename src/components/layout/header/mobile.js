import React, { Component } from 'react';

import { translate } from 'react-i18next';

import { Icon, Sidebar, Menu } from 'semantic-ui-react';

import { Link } from 'gatsby';

class HeaderMobile extends Component {
  state = { visible: false };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, navbarItems } = this.props;

    const { visible } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          items={navbarItems}
          vertical
          visible={visible}
        >
          {navbarItems.map(navbarItem => (
            <Menu.Item>
              <Link to={navbarItem.as}>
                {navbarItem.content}
              </Link>
            </Menu.Item>
          ))}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={this.handlePusher}
          style={{ minHeight: "100vh" }}
        >
          <Menu>
            <Menu.Item position='right' onClick={this.handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default translate()(HeaderMobile);
