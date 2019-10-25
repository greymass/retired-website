import React, { Component } from 'react';



import { Responsive } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';

import HeaderMobile from './header/mobile';
import HeaderDesktop from './header/desktop';

class Header extends Component {
  render() {
    const { data } = this.props;

    const activeItem = `/${window.location.pathname.split('/')[1]}`;

    const navbarItems = [
      { as: '/', content: 'home', key: '/' },
      { as: '/about', content: 'about', key: 'about' },
      { as: '/projects', content: 'projects', key: 'projects' },
      { as: '/blog', content: 'blog', key: 'blog' },
    ];

    return (
      <React.Fragment>
        <Responsive
          as={React.Fragment}
          {...Responsive.onlyMobile}
        >
          <HeaderMobile
            activeItem={activeItem}
            data={data}
            navbarItems={navbarItems}
          />
        </Responsive>
        <Responsive
          as={React.Fragment}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <HeaderDesktop
            activeItem={activeItem}
            data={data}
            navbarItems={navbarItems}
          />
        </Responsive>
      </React.Fragment>
    )
  }
}

const HeaderWrapper = Header;

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
