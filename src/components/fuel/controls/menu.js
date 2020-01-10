import React, { Component } from "react";
import { Button, Menu } from 'semantic-ui-react';

class FuelControlsMenu extends Component {
  render() {
    const {
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
            name="overview"
            active={menuItem === "overview"}
            onClick={onMenuChange}
          />
          <Menu.Item
            as="a"
            name="transactions"
            active={menuItem === "transactions"}
            onClick={onMenuChange}
          />
          <Menu.Item
            as="a"
            name="settings"
            active={menuItem === "settings"}
            onClick={onMenuChange}
          />
        </Menu>
      </React.Fragment>
    )
  }
}

export default FuelControlsMenu;
