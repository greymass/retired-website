import React, { Component } from "react";
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import TransitLogin from '../shared/modals/transit/login';

import { injectIntl } from 'gatsby-plugin-intl';

class FuelLogin extends Component {
  state = {};

  render() {
    const { setSigner, intl } = this.props;
    const { loggingIn } = this.state;

    return (
      <React.Fragment>
        <Grid.Row centered>
          <Grid.Column width={10} textAlign="center">
            <Segment padded stacked>
              <Header size="large">
                {intl.formatMessage({ id: 'fuel_login_header' })}
                <Header.Subheader>
                  {intl.formatMessage({ id: 'fuel_login_subheader' })}
                </Header.Subheader>
              </Header>
              <Button
                onClick={() => this.setState({ loggingIn: true })}
                primary
              >
                Sign in
              </Button>

              {loggingIn && (
                <TransitLogin
                  setSigner={setSigner}
                  onClose={() => this.setState({ loggingIn: false })}
                  open={loggingIn}
                />
              )}

            </Segment>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

export default injectIntl(FuelLogin);
