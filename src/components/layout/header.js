import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';

import HeaderSidebar from './header/sidebar';
import HeaderMenu from './header/menu';

class Header extends Component {
  state = { sidebarVisible: false };
  handlePusher = () => {
    const { sidebarVisible } = this.state;

    if (sidebarVisible) this.setState({ sidebarVisible: false });
  };

  handleToggle = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

  render() {
    const { data, intl, location } = this.props;
    const { sidebarVisible } = this.state;

    const pathName = (location && location.pathname.split('/')[2]) || '';
    const activeItem = location && `/${intl.locale}${(pathName) ? '/' : ''}${pathName}`;

    const navbarItems = [
      { as: `/${intl.locale}`, content: 'home', key: '/' },
      { as: `/${intl.locale}/about`, content: 'about', key: 'about' },
      { as: `/${intl.locale}/projects`, content: 'projects', key: 'projects' },
      { as: `/${intl.locale}/apis`, content: 'apis', key: 'apis' },
      { as: `/${intl.locale}/blog`, content: 'blog', key: 'blog' },
    ];

    return (
      <React.Fragment>
        <HeaderSidebar
          handleToggle={this.handleToggle}
          navbarItems={navbarItems}
          sidebarVisible={sidebarVisible}
        />
        <HeaderMenu
          activeItem={activeItem}
          data={data}
          handlePusher={this.handlePusher}
          handleToggle={this.handleToggle}
          navbarItems={navbarItems}
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
