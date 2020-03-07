import React, { Component } from 'react';
import { Button, Header, Grid } from 'semantic-ui-react';

import chains from '../../../../constants/chains';

import preLoginStyles from './preLogin.module.css';

class VoteProducerPreLogin extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className={preLoginStyles.root}>
        <Header
          textAlign='center'
          content="To vote for Greymass or to delegate to our proxy, first please login on one of those chains."
        />
        <Grid centered stackable>
          {Object.values(chains).map(chain => (
            <Grid.Column tablet={16} computer={5}>
              <Button
                content={`Support us on ${chain.name.toUpperCase()}`}
                onClick={() => onClick(chain.name)}
                primary
                size="large"
              />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default VoteProducerPreLogin;
