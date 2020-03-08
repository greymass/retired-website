import React, { Component } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Segment,
  Message,
} from 'semantic-ui-react';

import loggedInStyles from './loggedIn.module.css';
import SharedDropdownsTransitSessions from '../../../shared/dropdowns/transit/sessions';

class VoteProducerLoggedIn extends Component {
  render() {
    const {
      account,
      clearTransaction,
      logout,
      proxyVotes,
      setVoteToRemove,
      transaction,
      vote,
    } = this.props;

    return (
      <div className={loggedInStyles.root}>
        <Segment textAlign="center" basic>
          <p>
            Logged in as
            &nbsp;
            <SharedDropdownsTransitSessions />
          </p>
          <Header
            content="You can choose to delegate to our proxy or simply add Greymass to your list of voted bps."
            textAlign="center"
          />
          <br />
          <Segment basic>
            <Grid centered stackable>
              <Grid.Column width={6} textAlign="center">
                <Button
                  content="Proxy your Vote"
                  onClick={proxyVotes}
                  primary
                  size="huge"
                />
              </Grid.Column>
              <span className="mobile-only">OR</span>
              <Grid.Column width={6} textAlign="center">
                {(account.voter_info && account.voter_info.producers.length === 30) && (
                  <Dropdown
                    fluid
                    onChange={(event, data) => setVoteToRemove(data.text)}
                    options={
                      account.voter_info.producers.map(producer => ({
                        key: producer,
                        text: producer,
                        value: producer,
                      }))
                    }
                    placeholder="Remove one of your votes"
                    selection
                  />
                )}
                <Button
                  content="Vote for Greymass"
                  onClick={vote}
                  primary
                  size="huge"
                />
              </Grid.Column>
            </Grid>
            <Divider className="mobile-hidden" vertical>OR</Divider>
          </Segment>
        </Segment>
        {(transaction) && (
          <Message
            positive
            onDismiss={clearTransaction}
          >
            <Header size="large">
              Thank you, {account.name}!
              <Header.Subheader>
                We truly appreciate your support.
              </Header.Subheader>
            </Header>
            <p>If you'd like to vote again with a different account, simply login to that account and select it from the dropdown above.</p>
          </Message>
        )}
      </div>
    );
  }
}

export default VoteProducerLoggedIn;
