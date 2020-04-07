import React, { Component } from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';

import preLoginStyles from './preLogin.module.css';

class VoteProducerPreLogin extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <Segment
        className={preLoginStyles.root}
        secondary
        stacked
      >
        <Header
          textAlign='center'
          content="To vote for Greymass directly or through our proxy, please sign in."
        />
        <Button
          content={`Sign in`}
          onClick={onClick}
          primary
          size="large"
        />
      </Segment>
    );
  }
}

export default VoteProducerPreLogin;
