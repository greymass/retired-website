import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';

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

import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl';

import SharedDropdownsTransitSessions from '../../../shared/dropdowns/transit/sessions';
import SharedElementsChainLogo from '../../../shared/elements/chainLogo';
import SharedElementsExplorerLink from '../../../shared/elements/explorerLink';

import loggedInStyles from './loggedIn.module.css';

class VoteProducerLoggedIn extends Component {
  render() {
    const {
      account,
      bps,
      clearTransaction,
      currentTransitSession,
      intl,
      proxyVotes,
      setVoteToRemove,
      transaction,
      vote,
    } = this.props;

    const { chainName } = currentTransitSession;

    const chainBp = find(bps, { network: chainName });
    const hasProxy = chainBp && chainBp.proxy;
    const producers = (account.voter_info && account.voter_info.producers) || [];
    const proxyAccount = account.voter_info && account.voter_info.proxy;

    let statusMessage;

    if (proxyAccount) {
      statusMessage = intl.formatMessage({ id: 'support_status_message_proxying' }, { proxyAccount });
    } else if (producers.length === 0) {
      statusMessage = intl.formatMessage({ id: 'support_status_message_not_voting' });
    } else if (producers.includes('teamgreymass')) {
      statusMessage = intl.formatMessage({ id: 'support_status_message_voting_for_greymass', producersCount: producers.length })
    } else {
      statusMessage = intl.formatMessage({ id: 'support_status_message_voting_but_not_for_greymass', producersCount: producers.length })
    }

    return (
      <div className={loggedInStyles.root}>
        <Segment
          secondary
          stacked
          textAlign="center"
        >
          <Header
            content={intl.formatMessage({ id: 'support_support_us_directly' })}
            textAlign="center"
          />
          <Segment attached="top" size="large">
            <SharedElementsChainLogo
              chain={chainName}
            />
            <p style={{ marginTop: '1em'}}>
              <FormattedHTMLMessage
                id="support_logged_in_message"
                values={{chainName}}
              />
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
                    placeholder={intl.formatMessage({ id: 'support_remove_one_vote' })}
                    selection
                  />
                )}
                <Button
                  content={intl.formatMessage({ id: 'support_vote_greymass_button' })}
                  onClick={vote}
                  primary
                  size="huge"
                />
                <p>
                  <div dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({
                      id: 'support_add_greymass_message',
                    },
                    {
                      explorerLink: ReactDOMServer.renderToStaticMarkup(
                        <SharedElementsExplorerLink
                          chain={chainName}
                          type="account"
                          value="teamgreymass"
                        />
                      )
                    })
                  }} />
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
                        content={intl.formatMessage({ id: 'support_proxy_your_vote_button' })}
                        onClick={proxyVotes}
                        primary
                        size="huge"
                      />
                      <p>
                        <div dangerouslySetInnerHTML={{
                          __html: intl.formatMessage({
                              id: 'support_proxy_to_greymass',
                            },
                            {
                              explorerLink: ReactDOMServer.renderToStaticMarkup(
                                <SharedElementsExplorerLink
                                  chain={chainName}
                                  type="account"
                                  value="greymassvote"
                                />
                              )
                            })
                        }} />
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
              {intl.formatMessage({ id: 'support_thank_you_header' }, { accountName: account.account_name })}
              <Header.Subheader>
                {intl.formatMessage({ id: 'support_thank_you_subheader' })}
              </Header.Subheader>
            </Header>
            <p>{intl.formatMessage({ id: 'support_thank_you_paragraph' })}</p>
          </Message>
        )}
      </div>
    );
  }
}

export default injectIntl(VoteProducerLoggedIn);
