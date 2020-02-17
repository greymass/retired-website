import React  from 'react';
import { Button, Header, Segment, Grid, Dropdown } from 'semantic-ui-react';

import TransitWrapper from '../../shared/wrappers/transit';

class SupportTransactionHandlersVoteproducer extends TransitWrapper {
  state = {
    processing: false,
  }

  transitLogin = async (walletName) => {
    this.setState({
      processing: true,
    })
    await this.setSigner(walletName);
    this.setState({ processing: false });
  }

  vote = async () => {
    await this.voteproducerAction('vote')
  }

  proxyVotes = async () => {
    await this.voteproducerAction('proxy')
  }

  voteproducerAction = async (type) => {
    const { account, voteToRemove } = this.state;

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
      account,
      error,
      processing,
      transaction,
    } = this.state;

    return (
     <React.Fragment>
       <Segment
         loading={processing}
       >
         {account ? (
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
             <Grid>
               <Grid.Column width={8} textAlign="center">
                 <Button
                   content="Proxy your Vote"
                   onClick={this.proxyVotes}
                   primary
                   size="huge"
                 />
               </Grid.Column>
               <Grid.Column width={8}>
                 {(account.voter_info.producers.length === 30)
                   ? (
                     <Dropdown
                       options={account.voter_info.producers}
                       placeholder="Remove one of your votes"
                       onChange={
                         (value) => this.setState({ voteToRemove: value })
                       }
                     />
                   )
                   : false
                 }
                 <Button
                   content="Vote for Greymass"
                   onClick={this.vote}
                   primary
                   size="huge"
                 />
               </Grid.Column>
             </Grid>
           </React.Fragment>
         ) : (
           <React.Fragment>
             <Button
               content="Login with Scatter"
               onClick={() => this.transitLogin('scatter')}
               primary
               size="huge"
             />
             <Button
               content="Login with Anchor"
               onClick={() => this.transitLogin('anchor-link')}
               primary
               size="huge"
             />
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
     </React.Fragment>
    )
  }
}

export default SupportTransactionHandlersVoteproducer;
