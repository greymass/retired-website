import React, { Component } from 'react';

import { translate } from 'react-i18next';

import { Icon, Sidebar, Menu } from 'semantic-ui-react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import mobileHeaderMenuStyles from './menu.module.css';
import sharedHeaderStyles from '../shared.module.css';

class HeaderMobileMenu extends Component {
  render() {
    const {
      data,
      visible,
    } = this.props;

    return (
      <Sidebar.Pusher
        dimmed={visible}
        onClick={this.props.handlePusher}
        className={mobileHeaderMenuStyles.sidebarPusher}
      >
        <Menu>
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
          <Menu.Item
            className={mobileHeaderMenuStyles.sidebarButton}
            position='right'
            onClick={this.props.handleToggle}
          >
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu>
      </Sidebar.Pusher>
    );
  }
}

export default translate('layout')(HeaderMobileMenu);
