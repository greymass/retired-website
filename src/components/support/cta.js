import React, { Component } from "react";
import SupportIntegationsEEP7Proxy from './integrations/eep7/proxy';
import { Container } from 'semantic-ui-react';

class SupportCTA extends Component {
  render() {
    return (
     <Container style={{ minHeight: '1000px', padding: '50px 0' }}>
       <SupportIntegationsEEP7Proxy />
     </Container>
    )
  }
}

export default SupportCTA;
