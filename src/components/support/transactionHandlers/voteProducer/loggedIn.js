import React, { Component } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';

import loggedInStyles from './loggedIn.module.css';

class VoteProducerLoggedIn extends Component {
  render() {
    const {
      account,
      logout,
      proxyVotes,
      transaction,
      setVoteToRemove,
      vote,
    } = this.props;

    console.log({account})
    console.log({t: account.voter_info.producers})

    return (
      <div className={loggedInStyles.root}>
        <Segment basic>
          <Header
            textAlign="center"
          >
            Signed in as "{account.name}".
            &nbsp;
            &nbsp;
            <Button
              content="Logout"
              onClick={logout}
              size="mini"
            />
          </Header>
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
          <Segment secondary size="large">
            <Header size="large">
              Thank you, {account.name}!
              <Header.Subheader>
                We truly appreciate your support.
              </Header.Subheader>
            </Header>
            <p>If you'd like to vote again with a different account, simply click the button again and change accounts.</p>
          </Segment>
        )}
      </div>
    );
  }
}

export default VoteProducerLoggedIn;
