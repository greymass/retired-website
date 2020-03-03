import React  from 'react';
import { Dropdown } from 'semantic-ui-react';

import TransitWrapper from '../../../shared/wrappers/transit';

import SharedModalsTransitLogin from '../../../shared/modals/transit/login';

class SharedDropdownsTransitLogin extends TransitWrapper {
  render() {
    const {
      loggingIn,
      currentTransitSession,
      transitSessions,
    } = this.state;

    const {
      account
    } = currentTransitSession;

    console.log({transitSessionsInSession: transitSessions})

    return (
      <>
        {account ? (
          <Dropdown text={account ? account.name : 'Login'} pointing className='link item'>
            <Dropdown.Menu>
              {transitSessions.length > 1 && (
                <Dropdown.Item>
                  <Dropdown text='Switch Account'>
                    <Dropdown.Menu>
                      <Dropdown.Header>Select Account</Dropdown.Header>
                      {transitSessions.map(transitSession => (
                        <Dropdown.Item>{transitSession.name}</Dropdown.Item>
                      ))}
                      <Dropdown.Divider />
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
              )}
              <Dropdown.Item>
                <a onClick={() => this.setState({ loggingIn: true })}>
                  + Add account
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a onClick={this.logout}>
                  Logout
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <a href='#' onClick={() => this.setState({ loggingIn: true })}>
            Login
          </a>
        )}
        {loggingIn && (
          <SharedModalsTransitLogin
            onClose={() => this.setState({ loggingIn: false })}
          />
        )}
      </>
    );
  }
}

export default SharedDropdownsTransitLogin;
