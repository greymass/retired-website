import React  from 'react';
import { Segment } from 'semantic-ui-react';

import { debounce } from 'lodash';

import TransitWrapper from '../../shared/wrappers/transit';
import TransitLogin from '../../shared/modals/transit/login';

import PreLogin from './voteProducer/preLogin';
import LoggedIn from './voteProducer/loggedIn';
import TransitError from "../../shared/messages/transit/error"

class SupportTransactionHandlersVoteProducer extends TransitWrapper {
  vote = debounce(async () => {
    await this.voteproducerAction('vote')
  }, 500);

  proxyVotes = debounce(async () => {
    await this.voteproducerAction('proxy')
  }, 500);

  voteproducerAction = async (type) => {
    const { currentTransitSession, voteToRemove } = this.state;
    const { account } = currentTransitSession;

    this.setState({ processing: true, error: null });

    const producers = (type === 'vote')
      ? account.voter_info.producers.filter(vote => vote !== voteToRemove)
      : [];

    producers.push('teamgreymass');

    const transactionData = {
      actions: [
        {
          authorization: [{
            actor: 'greymassfuel',
            permission: 'cosign',
          }],
          account: 'greymassnoop',
          name: 'noop',
          data: {}
        },
        {
          account: 'eosio',
          name: 'voteproducer',
          authorization: [{
            actor: account.name,
            permission: account.authority,
          }],
          data: {
            producers: type === 'proxy' ? [] : producers,
            proxy: type === 'proxy' ? 'greymassvote' : '',
            voter: account.name,
          }
        }
      ],
    }

    const transaction = await this.transact(transactionData, {
      blocksBehind: 3,
      expireSeconds: 120,
      broadcast: true,
    });

    this.setState({ transaction, processing: false });
  }

  render() {
    const {
      blockchain,
      currentTransitSession,
      login,
      processing,
      transaction,
      error,
    } = this.state;
    const {
      bps,
    } = this.props;

    const {
      account
    } = currentTransitSession;

    return (
     <Segment
       loading={processing}
       basic
     >
       <TransitLogin
          blockchain={blockchain}
          setSigner={(walletName, blockchain) => new Promise(async () => {
            const account = await this.setSigner(walletName, blockchain)
            this.setState({ account });
          })}
          onClose={() => this.setState({ login: false })}
          open={login}
       />
       {!account && (
         <PreLogin
           onClick={() => this.setState({ login: true })}
         />
       )}
       {account && (
         <LoggedIn
           account={account}
           bps={bps}
           currentTransitSession={currentTransitSession}
           proxyVotes={this.proxyVotes}
           vote={this.vote}
           logout={this.logout}
           setVoteToRemove={voteToRemove => this.setState({ voteToRemove })}
           transaction={transaction}
           clearTransaction={() => this.setState({ transaction: false })}
         />
       )}
       {error && (
         <TransitError
           error={error}
         />
       )}
     </Segment>
    )
  }
}

export default SupportTransactionHandlersVoteProducer;
