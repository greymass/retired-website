import React  from 'react';
import { Button, Header, Segment, Grid, Dropdown } from 'semantic-ui-react';

import { debounce } from 'lodash';

import TransitWrapper from '../../shared/wrappers/transit';
import TransitLogin from '../../shared/modals/transit/login';

import chains from '../../../constants/chains';

import voteProducerStyles from './voteProducer.module.css';

class SupportTransactionHandlersVoteproducer extends TransitWrapper {
  vote = debounce(async () => {
    await this.voteproducerAction('vote')
  }, 500);

  proxyVotes = debounce(async () => {
    await this.voteproducerAction('proxy')
  }, 500);

  voteproducerAction = async (type) => {
    const { currentTransitSession, voteToRemove } = this.state;
    const { account } = currentTransitSession;

    this.setState({ processing: true });

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
      error,
      processing,
      transaction,
    } = this.state;

    const {
      account
    } = currentTransitSession;

    return (
     <Segment
       loading={processing}
       basic
     >
       {!blockchain && (
         <div className={voteProducerStyles.preLoginContainer}>
           <Header
             textAlign='center'
             content="To vote for Greymass or to delegate to our proxy, first please login on one of those chains."
           />
           <Grid centered stackable>
             {Object.values(chains).map(chain => (
               <Grid.Column tablet={16} computer={5}>
                 <Button
                   content={`Support us on ${chain.name.toUpperCase()}`}
                   onClick={() => this.setState({ blockchain: chain.name })}
                   primary
                   size="large"
                 />
               </Grid.Column>
             ))}
           </Grid>
         </div>
       )}
       {(blockchain && !account) && (
         <TransitLogin
            blockchain={blockchain}
            setSigner={(walletName, blockchain) => new Promise(async () => {
              const account = await this.setSigner(walletName, blockchain)
              this.setState({ account });
            })}
            onClose={() => this.setState({ blockchain: null })}
         />
       )}
       {account && (
         <React.Fragment>
           <Header
             textAlign="center"
           >
             Signed in as "{account.name}".
             &nbsp;
             &nbsp;
             <Button
               content="Logout"
               onClick={this.logout}
               size="mini"
             />
           </Header>
           <br />
           <Grid centered>
             <Grid.Column width={4} textAlign="center">
               <Button
                 content="Proxy your Vote"
                 onClick={this.proxyVotes}
                 primary
                 size="huge"
               />
             </Grid.Column>
             <Grid.Column width={4} textAlign="center">
               {(account.voter_info && account.voter_info.producers.length === 30) && (
                 <Dropdown
                   options={account.voter_info.producers}
                   placeholder="Remove one of your votes"
                   onChange={
                     (value) => this.setState({ voteToRemove: value })
                   }
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
         </React.Fragment>
       )}

       {(error)
         ? (
           <Segment color="red">
             An error occurred while processing your vote.
           </Segment>
         )
         : false
       }
       {(transaction)
         ? (
           <Segment secondary size="large">
             <Header size="large">
               Thank you, {account.name}!
               <Header.Subheader>
                 We truly appreciate your support.
               </Header.Subheader>
             </Header>
             <p>If you'd like to vote again with a different account, simply click the button again and change accounts.</p>
           </Segment>
         )
         : false
       }
     </Segment>
    )
  }
}

export default SupportTransactionHandlersVoteproducer;
