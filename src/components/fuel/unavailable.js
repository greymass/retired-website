import React, { Component } from "react";
import { Button, Container, Header, Grid, Message, Segment } from 'semantic-ui-react';
import SharedElementsChainLogo from '../shared/elements/chainLogo';

class FuelUnavailable extends Component {
  render() {
    const { chainName } = this.props;
    return (
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Segment padded stacked>
            <Container fluid textAlign="center">
              <SharedElementsChainLogo
                chain={chainName}
              />
              <Header size="large">
                Fuel is currently not available on {chainName.toUpperCase()}.
                <Header.Subheader>
                  To use Fuel, please sign in to one of the networks Fuel currently supports.
                </Header.Subheader>
              </Header>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default FuelUnavailable;
