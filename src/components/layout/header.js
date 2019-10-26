import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import { Responsive } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';

import HeaderMobile from './header/mobile';
import HeaderDesktop from './header/desktop';

class Header extends Component {
  render() {
    const { data, intl } = this.props;
    // const activeItem = `/${window.location.pathname.split('/')[1]}`;
    const activeItem = 'home'

    const navbarItems = [
      { as: `/${intl.locale}`, content: 'home', key: '/' },
      { as: `/${intl.locale}/about`, content: 'about', key: 'about' },
      { as: `/${intl.locale}/projects`, content: 'projects', key: 'projects' },
      { as: `/${intl.locale}/blog`, content: 'blog', key: 'blog' },
    ];
    // TODO: Responsive logic needs reworking
    // <Responsive
    //   as={React.Fragment}
    //   {...Responsive.onlyMobile}
    // >
    //   <HeaderMobile
    //     activeItem={activeItem}
    //     data={data}
    //     navbarItems={navbarItems}
    //   />
    // </Responsive>
    // <Responsive
    //   as={React.Fragment}
    //   minWidth={Responsive.onlyTablet.minWidth}
    // >
    //   <HeaderDesktop
    //     activeItem={activeItem}
    //     data={data}
    //     navbarItems={navbarItems}
    //   />
    // </Responsive>
    return (
      <HeaderDesktop
        activeItem={activeItem}
        data={data}
        navbarItems={navbarItems}
      />
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
