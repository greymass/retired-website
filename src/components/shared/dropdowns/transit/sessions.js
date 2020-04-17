import React  from 'react';
import { Dropdown } from 'semantic-ui-react';

import { injectIntl } from 'gatsby-plugin-intl';

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
      return !currentTransitSession.account ||
        transitSession.account.name !== currentTransitSession.account.name ||
        transitSession.chainName !== currentTransitSession.chainName;
    });
    return (
      <>
        {account ? (
          <Dropdown
            className={sessionsDropdownStyles.dropdown}
            text={account ? account.name : intl.formatMessage({ id: 'sign_in' })}
            pointing
          >
            <Dropdown.Menu>
              {otherTransitSessions.length > 1 && (
                <>
                  <Dropdown.Header>Switch Account</Dropdown.Header>
                  {otherTransitSessions.map(transitSession => (
                    <button onClick={() => this.switchAccount(transitSession)}>
                      <Dropdown.Item>
                        {transitSession.account.name} ({transitSession.chainName})
                      </Dropdown.Item>
                    </button>
                  ))}
                  <Dropdown.Divider />
                </>
              )}
              <button onClick={() => this.setState({ loggingIn: true })}>
                <Dropdown.Item>
                  + Add account
                </Dropdown.Item>
              </button>
              <button onClick={this.logout}>
                <Dropdown.Item>
                  Logout
                </Dropdown.Item>
              </button>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <button onClick={() => this.setState({ loggingIn: true })}>
            Sign in
          </button>
        )}
        {loggingIn && (
          <SharedModalsTransitLogin
            onClose={() => this.setState({ loggingIn: false })}
            open={loggingIn}
          />
        )}
      </>
    );
  }
}

export default injectIntl(SharedDropdownsTransitSessions);
