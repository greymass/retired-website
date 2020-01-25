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
  }

  vote = async () => {
    await this.voteproducerAction('vote')
  }

  proxyVotes = async () => {
    await this.voteproducerAction('proxy')
  }

  voteproducerAction = async (type) => {
    const { account, voteToRemove } = this.state;

    const producers =
      type === 'vote' &&
      account.vote_info.producers.filter(vote => vote !== voteToRemove);
    producers.push('teamgreymass');

    await this.transact({
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
            producers: producers || [],
            proxy: type === 'proxy' && 'greymassvote',
            voter: account.name,
          }
        }
      ],
    }, {
      blocksBehind: 3,
      expireSeconds: 120,
    });
  }

  render() {
    const {
      account,
      error,
      processing,
    } = this.state;
    return (
     <React.Fragment>
       <Segment
         loading={processing}
       >
         {account ? (
           <Grid>
             <Grid.Column>
               <Button
                 content="Proxy your Vote"
                 onClick={this.proxyVotes}
                 primary
                 size="huge"
               />
             </Grid.Column>
             <Grid.Column>
               <Dropdown
                 options={account.voter_info.producers}
                 placeholder="Remove one of your votes"
                 onChange={
                   (value) => this.setState({ voteToRemove: value })
                 }
               />
               <Button
                 content="Proxy your Vote"
                 onClick={this.vote}
                 primary
                 size="huge"
               />
             </Grid.Column>
           </Grid>
         ) : (
           <React.Fragment>
             <Button
               content="Login with Scatter"
               onClick={() => this.transitLogin('scatter')}
               primary
               size="huge"
             />
             <Button
               content="Proxy Vote with Anchor"
               onClick={() => this.transitLogin('anchor')}
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
         {(account)
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
