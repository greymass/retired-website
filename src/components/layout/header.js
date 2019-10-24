import React, { Component } from 'react';

import { translate } from 'react-i18next';

import { Responsive } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';

import HeaderMobile from './header/mobile';
import HeaderDesktop from './header/desktop';

class Header extends Component {
  render() {
    const { data, t } = this.props;

    const activeItem = window.location.pathname.split('/')[1];

    const navbarItems = [
      { as: '/', content: t('home'), key: 'home' },
      { as: '/about', content: t('about'), key: 'about' },
      { as: '/projects', content: t('projects'), key: 'projects' },
      { as: '/blog', content: t('blog'), key: 'blog' },
    ];

    return (
      <React.Fragment>
        <Responsive {...Responsive.onlyMobile}>
          <HeaderMobile
            activeItem={activeItem}
            data={data}
            navbarItems={navbarItems}
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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

const HeaderWrapper = translate('navbar')(Header);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/greymassLogo.png" }) {
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
