import React, { Component } from "react";
import TransactionHandlersVoteproducer from './transactionHandlers/voteproducer';
import { Container } from 'semantic-ui-react';

class SupportCTA extends Component {
  render() {
    return (
     <Container style={{ minHeight: '1000px', padding: '50px 0' }}>
       <TransactionHandlersVoteproducer />
     </Container>
    )
  }
}

export default SupportCTA;
