import React, { Component } from "react";
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import TransitLogin from '../shared/modals/transit/login';

class FuelLogin extends Component {
  state = {};

  render() {
    const { setSigner } = this.props;
    const { loggingIn } = this.state;

    return (
      <React.Fragment>
        <Grid.Row centered>
          <Grid.Column width={10} textAlign="center">
            <Segment padded stacked>
              <Header size="large">
                EOSIO Network Resources On-Demand
                <Header.Subheader>
                  Sign in to get started!
                </Header.Subheader>
              </Header>
              <Button
                onClick={() => this.setState({ loggingIn: true })}
              >
                Sign in
              </Button>

              {loggingIn && (
                <TransitLogin
                  setSigner={setSigner}
                  onClose={() => this.setState({ loggingIn: false })}
                />
              )}

            </Segment>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

export default FuelLogin;
