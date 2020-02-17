import React, { Component } from "react";
import { Button, Container, Header, Grid, Message, Segment } from 'semantic-ui-react';

class FuelTransaction extends Component {
  render() {
    const { clearTx, tx } = this.props;
    console.log(tx)
    return (
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Segment padded stacked>
            <Container fluid textAlign="center">
              <Header size="large">
                Transaction Complete
                <Header.Subheader>
                  <a href={`https://bloks.io/transaction/${tx.transaction_id}`} target="_new">
                    {tx.transaction_id}
                  </a>
                </Header.Subheader>
              </Header>
            </Container>
            <Message
              info
              header="Notice regarding deposits..."
              content="All deposits take approximately 3 minutes to confirm. The balances displayed will update every few seconds."
              textAlign="left"
            />
            <Container fluid textAlign="center">
              <Button
                content="Continue"
                onClick={clearTx}
                primary
              />
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default FuelTransaction;
