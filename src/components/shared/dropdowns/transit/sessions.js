import React  from 'react';
import { Dropdown } from 'semantic-ui-react';

import TransitWrapper from '../../../shared/wrappers/transit';

import SharedModalsTransitLogin from '../../../shared/modals/transit';

import { Card } from "semantic-ui-react/dist/commonjs/views/Card"
import { List } from "semantic-ui-react/dist/commonjs/elements/List"
import { Form } from "semantic-ui-react/dist/commonjs/collections/Form"

class SharedDropdownsTransitLogin extends TransitWrapper {
  state = {
    loggingIn: false,
    transitSessions: [],
  };

  render() {
    const {
      loggingIn,
      transitSessions,
    } = this.state;

    return (
      <>
        <Dropdown text='Shopping' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header>Switch Accounts</Dropdown.Header>
            <Dropdown.Item>
              <Dropdown text='Switch Account'>
                <Dropdown.Menu>
                  <Dropdown.Header>Select Account</Dropdown.Header>
                  {transitSessions.map(transitSession => (
                    <Dropdown.Item>{transitSession.name}</Dropdown.Item>
                  ))}
                  <Dropdown.Divider />
                  <Dropdown.Header>
                    <a onClick={() => this.setState({ loggingIn: true })}>
                      + Add account
                    </a>
                  </Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>
              <a onClick={this.logout}>
                Logout
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {loggingIn && (
          <SharedModalsTransitLogin />
        )}
      </>
    );
  }
}

export default SharedDropdownsTransitLogin;
