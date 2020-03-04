import React  from 'react';
import { Dropdown } from 'semantic-ui-react';

import TransitWrapper from '../../../shared/wrappers/transit';

import SharedModalsTransitLogin from '../../../shared/modals/transit/login';

import sessionsDropdownStyles from './sessions.module.css';

class SharedDropdownsTransitSessions extends TransitWrapper {
  render() {
    const {
      loggingIn,
      currentTransitSession,
      transitSessions,
    } = this.state;

    const {
      account
    } = currentTransitSession;

    const otherTransitSessions = transitSessions.filter(transitSession => {
      return transitSession.account.name !== currentTransitSession.account.name ||
        transitSession.chainName !== currentTransitSession.chainName;
    })

    return (
      <>
        {account ? (
          <Dropdown
            className={sessionsDropdownStyles.dropdown}
            text={account ? account.name : 'Login'}
            pointing
          >
            <Dropdown.Menu>
              {transitSessions.length > 1 && (
                <>
                  <Dropdown.Header>Switch Account</Dropdown.Header>
                  {otherTransitSessions.map(transitSession => (
                    <Dropdown.Item>{transitSession.account.name}</Dropdown.Item>
                  ))}
                </>
              )}
              <Dropdown.Divider />
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

export default SharedDropdownsTransitSessions;
