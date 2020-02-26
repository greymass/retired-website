import React, { Component } from "react";
import { Header, Grid, Segment } from 'semantic-ui-react';
import TransitLogin from '../shared/sections/transit/login';

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
                  Select a Blockchain to get started!
                </Header.Subheader>
              </Header>
              <TransitLogin
                setSigner={setSigner}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

export default FuelLogin;
