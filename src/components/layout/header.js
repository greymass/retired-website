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

    const location = this.props.location || (typeof window !== 'undefined' && window.location)
    const pathName = (location && location.pathname.split('/')[2]) || '';
    const activeItem = location && `/${intl.locale}${(pathName) ? '/' : ''}${pathName}`;

    const navbarItems = [
      {
        as: `/${intl.locale}/projects`,
        content: intl.formatMessage({ id: 'layout_projects' }),
        dropdown: (
          <Menu
            secondary
            vertical
          >
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/anchor`}
              style={{ display: 'none' }}
            >
              {intl.formatMessage({ id: 'layout_anchor_wallet' })}
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/esr`}
              style={{ display: 'none' }}
            >
              {intl.formatMessage({ id: 'layout_esr_protocol' })}
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/fuel`}
            >
              {intl.formatMessage({ id: 'layout_fuel' })}
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/apis`}
            >
              {intl.formatMessage({ id: 'layout_public_apis' })}
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={`/${intl.locale}/projects`}
            >
              {intl.formatMessage({ id: 'layout_view_all_projects' })}
            </Menu.Item>
          </Menu>
        ),
        key: 'projects'
      },
      {
        as: `/${intl.locale}/about`,
        content: intl.formatMessage({ id: 'layout_about' }),
        key: 'about'
      },
    ];

    if (data.site.siteMetadata.localesWithBlog.includes(intl.locale)) {
      navbarItems.push(
        {
          as: `/${intl.locale}/blog/1`,
          content: intl.formatMessage({ id: 'layout_blog' }),
          key: 'blog'
        }
      );
    }

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
        site {
          siteMetadata {
            localesWithBlog
          }
        }
      }
    `}
    render={data => <HeaderWrapper data={data} {...props} />}
  />
);
