import React, { Component } from "react";
import { Button, Container, Dimmer, Header, Grid, Image, Loader, Segment } from 'semantic-ui-react';

class FuelLogin extends Component {
  render() {
    const { setSigner } = this.props;
    return (
      <React.Fragment>
        <Grid.Row centered>
          <Grid.Column width={10} textAlign="center">
            <Segment padded stacked>
              <Header size="large">
                EOSIO Network Resources On-Demand
                <Header.Subheader>
                  Login with either Anchor or Scatter to get started!
                </Header.Subheader>
              </Header>
              <Button
                content="Login with Anchor"
                primary
                onClick={() => setSigner('anchor-link')}
              />
              <Button
                content="Login with Scatter"
                primary
                onClick={() => setSigner('scatter')}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

export default FuelLogin;
