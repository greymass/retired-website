import React, { Component } from 'react';
import { find } from 'lodash';
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
import SharedElementsChainLogo from '../../../shared/elements/chainLogo';
import SharedElementsExplorerLink from '../../../shared/elements/explorerLink';

class VoteProducerLoggedIn extends Component {
  render() {
    const {
      account,
      bps,
      clearTransaction,
      currentTransitSession,
      proxyVotes,
      setVoteToRemove,
      transaction,
      vote,
    } = this.props;

    const { chainName } = currentTransitSession;
    const hasProxy = find(bps, { network: chainName }).proxy;
    const producers = (account.voter_info && account.voter_info.producers) || [];
    const proxyAccount = account.voter_info.proxy;

    let statusMessage;

    if (proxyAccount) {
      statusMessage = `You are currently proxying your vote to ${proxyAccount}.`;
    } else if (producers.length === 0) {
      statusMessage = 'You are currently not voting for block producers.';
    } else if (producers.includes('teamgreymass')) {
      statusMessage = `You are currently voting for ${producers.length} block producers, including teamgreymass.`
    } else {
      statusMessage = `You are currently voting for ${producers.length} block producers, and not voting for teamgreymass.`
    }

    return (
      <div className={loggedInStyles.root}>
        <Segment
          secondary
          stacked
          textAlign="center"
        >
          <Header
            content="To support us directly from our website, select an option below."
            textAlign="center"
          />
          <Segment attached="top" size="large">
            <SharedElementsChainLogo
              chain={chainName}
            />
            <p style={{ marginTop: '1em'}}>
              Voting on <strong>{chainName}</strong> as
              &nbsp;
              <SharedDropdownsTransitSessions />
            </p>
            <p>
              {statusMessage}
            </p>
          </Segment>
          <Segment attached>
            <Grid centered stackable>
              <Grid.Column width={6} textAlign="center">
                {(producers.length === 30) && (
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
                <p>
                  Add
                  {' '}
                  <SharedElementsExplorerLink
                    chain={chainName}
                    type="account"
                    value="teamgreymass"
                  />
                  {' '}
                  as one of your 30 votes to support us while controlling the remaining 29 votes.
                </p>
              </Grid.Column>
              {(hasProxy)
                ? (
                  <React.Fragment>
                    <Grid.Column width={1} />
                    <span className="mobile-only">OR</span>
                    <Divider className="mobile-hidden" vertical>OR</Divider>
                    <Grid.Column computer={6} textAlign="center">
                      <Button
                        content="Proxy your Vote"
                        onClick={proxyVotes}
                        primary
                        size="huge"
                      />
                      <p>
                        Proxy your voting rights to the
                        {' '}
                        <SharedElementsExplorerLink
                          chain={chainName}
                          type="account"
                          value="greymassvote"
                        />
                        {' '}
                        proxy, which will be used to vote for the block producers we feel bring the most value (including Greymass).
                      </p>
                    </Grid.Column>
                  </React.Fragment>
                )
                : false
              }

            </Grid>
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
