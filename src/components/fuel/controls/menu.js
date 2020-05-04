import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import { injectIntl } from 'gatsby-plugin-intl';

class FuelControlsMenu extends Component {
  render() {
    const {
      intl,
      menuItem,
      onMenuChange,
    } = this.props;
    return (
      <React.Fragment>
        <Menu
          pointing
          secondary
          style={{ marginBottom: '2em' }}
          vertical
        >
          <Menu.Item
            as="a"
            name={intl.formatMessage({id: 'fuel_menu_overview' })}
            active={menuItem === "overview"}
            onClick={onMenuChange}
          />
          <Menu.Item
            as="a"
            name={intl.formatMessage({id: 'fuel_menu_transactions' })}
            active={menuItem === "transactions"}
            onClick={onMenuChange}
            style={{ display: 'none' }}
          />
          <Menu.Item
            as="a"
            name={intl.formatMessage({id: 'fuel_menu_settings' })}
            active={menuItem === "settings"}
            onClick={onMenuChange}
            style={{ display: 'none' }}
          />
        </Menu>
      </React.Fragment>
    )
  }
}

export default injectIntl(FuelControlsMenu);
