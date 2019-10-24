import React, { Component } from 'react';

import { translate } from 'react-i18next';

import HeaderMobileMenu from './mobile/menu';
import HeaderMobileSidebar from './mobile/sidebar';

class HeaderMobile extends Component {
  state = { visible: false };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const {
      data,
      navbarItems,
    } = this.props;

    const { visible } = this.state;

    return (
      <React.Fragment>
        <HeaderMobileSidebar
          handleToggle={this.handleToggle}
          navbarItems={navbarItems}
          visible={visible}
        />
        <HeaderMobileMenu
          data={data}
          handlePusher={this.handlePusher}
          handleToggle={this.handleToggle}
          visible={visible}
        />
      </React.Fragment>
    );
  }
}

export default translate('layout')(HeaderMobile);
