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
      setState,
      transaction,
    } = this.props;

    return (
      <div className={loggedInStyles.root}>
        <Segment basic>
          <hr />
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
            content="You can choose to delegate to our proxy or simply add Greymass to one of your voted bps."
            textAlign="center"
          />
          <br />
          <Segment basic>
            <Grid centered>
              <Grid.Column width={4} textAlign="center">
                <Button
                  content="Proxy your Vote"
                  onClick={proxyVotes}
                  primary
                  size="huge"
                />
              </Grid.Column>
              <Grid.Column width={4} textAlign="center">
                {(account.voter_info && account.voter_info.producers.length === 0) && (
                  <Dropdown
                    options={account.voter_info.producers}
                    placeholder="Remove one of your votes"
                    onChange={(value) => setState({ voteToRemove: value })}
                  />
                )}
                <Button
                  content="Vote for Greymass"
                  onClick={this.vote}
                  primary
                  size="huge"
                />
              </Grid.Column>
            </Grid>
            <Divider vertical>OR</Divider>
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
