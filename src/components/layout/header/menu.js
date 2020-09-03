import React, { Component } from 'react';

import { Icon, Sidebar, Menu, Image, Container } from 'semantic-ui-react';
import { injectIntl } from 'gatsby-plugin-intl';

import { Link } from 'gatsby';

import Logo from '../../../images/greymass-logo-white.png';
import LayoutHeaderMenuLink from './menu/link';
import VoteUsButton from '../../shared/buttons/voteUs';

import SharedDropdownsTransitSessions from '../../shared/dropdowns/transit/sessions';

import menuStyles from './menu.module.css';

class HeaderMobileMenu extends Component {
  render() {
    const { activeItem, handleToggle, intl, navbarItems } = this.props;

    return (
      <div onClick={this.props.handlePusher} className={menuStyles.pusher}>
        <Container className={menuStyles.container}>
          <Menu secondary className={menuStyles.menu}>
            <Menu.Item>
              <Link to={`/${intl.locale}`}>
                <img
                  alt="Greymass Logo"
                  className={menuStyles.image}
                  src={Logo}
                />
              </Link>
            </Menu.Item>

            {navbarItems.map(
              navbarItem => (
                <Menu.Item key={navbarItem.as} className={menuStyles.item}>
                  <LayoutHeaderMenuLink
                    active={
                      activeItem !== `/${intl.locale}` &&
                      navbarItem.as.startsWith(activeItem)
                    }
                    content={navbarItem.content}
                    dropdown={navbarItem.dropdown}
                    to={navbarItem.as}
                  />
                </Menu.Item>
              ),
              this
            )}

            <Menu.Menu position="right">
              <Menu.Item className="mobile-hidden">
                <SharedDropdownsTransitSessions />
              </Menu.Item>
              <Menu.Item>
                <VoteUsButton />
              </Menu.Item>

              {/* <Menu.Item className={`mobile-only`} onClick={handleToggle}>
                <Icon name="sidebar" className={menuStyles.sidebarButton} />
              </Menu.Item> */}
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default injectIntl(HeaderMobileMenu);
