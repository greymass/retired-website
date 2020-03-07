import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql, Link, StaticQuery } from 'gatsby';
import { Menu } from 'semantic-ui-react'

import HeaderSidebar from './header/sidebar';
import HeaderMenu from './header/menu';


import TransitWrapper from '../shared/wrappers/transit';

class Header extends TransitWrapper {
  state = {
    transitSessions: [],
    sidebarVisible: false
  };

  componentDidMount() {
    window.onstorage = () => {
      this.loadSessions();
    };

    this.loadSessions();
  }

  loadSessions = () => {
    this.setState({ transitSessions: window.localStorage.getItem('transitSessions') })
  }

  handlePusher = () => {
    const { sidebarVisible } = this.state;

    if (sidebarVisible) this.setState({ sidebarVisible: false });
  };

  handleToggle = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

  render() {
    const { data, intl } = this.props;
    const { sidebarVisible, transitSessions } = this.state;

    const location = this.props.location || (window && window.location)
    const pathName = (location && location.pathname.split('/')[2]) || '';
    const activeItem = location && `/${intl.locale}${(pathName) ? '/' : ''}${pathName}`;

    const navbarItems = [
      {
        as: `/${intl.locale}/projects`,
        content: 'projects',
        dropdown: (
          <Menu
            secondary
            vertical
          >
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/anchor`}
            >
              Anchor Wallet
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/esr`}
            >
              ESR Protocol
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/fuel`}
            >
              Fuel
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/apis`}
            >
              Public APIs
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/projects`}
            >
              View all project
            </Menu.Item>
          </Menu>
        ),
        key: 'projects'
      },
      {
        as: `/${intl.locale}/about`,
        content: 'about',
        key: 'about'
      },
      {
        as: `/${intl.locale}/blog`,
        content: 'blog',
        key: 'blog'
      },
    ];

    return (
      <React.Fragment>
        <HeaderSidebar
          handleToggle={this.handleToggle}
          navbarItems={navbarItems}
          sidebarVisible={sidebarVisible}
          transitSessions={transitSessions}
        />
        <HeaderMenu
          activeItem={activeItem}
          data={data}
          handlePusher={this.handlePusher}
          handleToggle={this.handleToggle}
          navbarItems={navbarItems}
          transitSessions={transitSessions}
        />
      </React.Fragment>
    )
  }
}

const HeaderWrapper = injectIntl(Header);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "greymassLogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeaderWrapper data={data} {...props} />}
  />
);
