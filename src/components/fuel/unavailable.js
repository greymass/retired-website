import React, { Component } from 'react';
import { Container, Header, Grid, Segment } from 'semantic-ui-react';
import { injectIntl } from 'gatsby-plugin-intl';

import SharedElementsChainLogo from '../shared/elements/chainLogo';

class FuelUnavailable extends Component {
  render() {
    const { chainName, intl } = this.props;
    return (
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Segment padded stacked>
            <Container fluid textAlign="center">
              <SharedElementsChainLogo
                chain={chainName}
              />
              <Header size="large">
                {intl.formatMessage({ id: 'fuel_unavailable_header' }, { chainName: chainName.toUpperCase() })}
                <Header.Subheader>
                  {intl.formatMessage({ id: 'fuel_unavailable_subheader' })}
                </Header.Subheader>
              </Header>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default injectIntl(FuelUnavailable);
