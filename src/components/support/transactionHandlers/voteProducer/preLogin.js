import React, { Component } from 'react';
import { Button, Header, Grid, Segment } from 'semantic-ui-react';

import chains from '../../../../constants/chains';

import preLoginStyles from './preLogin.module.css';

class VoteProducerPreLogin extends Component {
  render() {
    const { onClick } = this.props;

    const productionChains = Object.values(chains).filter(chain => {
      return process.env.NODE_ENV === 'development' || chain.name !== 'jungle';
    });

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
