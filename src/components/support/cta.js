import React, { Component } from "react";
import TransactionHandlersProxy from './transactionHandlers/proxy';
import { Container } from 'semantic-ui-react';

class SupportCTA extends Component {
  render() {
    return (
     <Container style={{ minHeight: '1000px', padding: '50px 0' }}>
       <TransactionHandlersProxy />
     </Container>
    )
  }
}

export default SupportCTA;
