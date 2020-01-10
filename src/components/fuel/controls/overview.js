import React, { Component } from "react";
import { Button, Card, Container, Dimmer, Divider, Form, Header, Grid, Icon, Image, List, Loader, Menu, Message, Modal, Segment, Table } from 'semantic-ui-react';
import axios from 'axios';

import FuelNumber from '../number';
import eosLogo from '../../../images/blockchain-eos-logo.svg';

const apiUrl = 'https://eos.greymass.com/v1/fuel'
const packages = [
  {
    name: 'basic',
    price: 1,
  },
  {
    name: 'pro',
    price: 100000,
  },
]

const msPerTransfer = 1;
const msPerVote = 1.5;
const msPerStake = 1.25;

class FuelControlsOverview extends Component {
  render() {
    const {
      account,
      client,
      cosigner,
      purchase,
    } = this.props;
    if (!client || !cosigner) return false;
    return (
      <React.Fragment>
        <Table definition>
          <Table.Header>
            <Table.HeaderCell>
              Network
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Resource Quotas
            </Table.HeaderCell>
          </Table.Header>
          <Table.Row>
            <Table.Cell collapsing textAlign="center">
              <Image centered src={eosLogo} style={{ width: '32px' }}/>
              EOS
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Header>
                <FuelNumber
                  number={client.balance / cosigner.fee_ms_package || 0}
                  precision={3}
                  suffix="ms"
                />
              </Header>
            </Table.Cell>
          </Table.Row>
        </Table>
        <Message
          info
          header="Wait Times"
          content="All purchases take approximately 3 minutes to confirm while awaiting irreversibility."
          textAlign="left"
        />
        <Modal
          centered={false}
          content={(
            <Modal.Content>
              <Grid>
                <Grid.Row centered>
                  <Grid.Column width={16}>
                    <Header
                      size="large"
                      textAlign="center"
                    >
                      Please select one of the options below.
                    </Header>
                    <Card.Group centered>
                      {packages.map((pkg) => (
                        <Card color="blue">
                          <Card.Content>
                            <Card.Header>
                              {pkg.name}
                            </Card.Header>
                            <Card.Meta>
                              <span className='date'>{pkg.price / cosigner.fee_ms}ms of CPU</span>
                            </Card.Meta>
                            <Card.Description>
                              <List>
                                <List.Item>Around {pkg.price / cosigner.fee_ms / msPerTransfer} tokens transfers</List.Item>
                              </List>
                            </Card.Description>
                          </Card.Content>
                          <Card.Content extra textAlign="center">
                            <Header>
                              <FuelNumber
                                currency
                                number={pkg.price}
                              />
                              EOS
                            </Header>
                            <Button
                              content="Purchase"
                              primary
                              onClick={() => purchase(pkg)}
                            />
                          </Card.Content>
                        </Card>
                      ))}
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Divider horizontal>Or</Divider>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={7}>
                    <Header
                      size="large"
                      textAlign="center"
                    >
                      Enter a custom amount
                    </Header>
                    <Form>
                      <Form.Field>
                        <label>Amount of EOS to spend</label>
                        <Form.Input type="text" />
                      </Form.Field>
                      <Container textAlign="center">
                        <Button
                          content="Purchase"
                          primary
                        />
                      </Container>
                    </Form>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign="center" width={16}>
                    <Button
                      content="Cancel"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          )}
          closeIcon
          dimmer="inverted"
          header="Purchase Fuel"
          trigger={(
            <Button
              content="Purchase Fuel"
              primary
            />
          )}
        />
      </React.Fragment>
    )
  }
}

export default FuelControlsOverview;
