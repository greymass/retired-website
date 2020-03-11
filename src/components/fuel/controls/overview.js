import React, { Component } from "react";
import { Button,
  Card,
  Container,
  Divider,
  Form,
  Header,
  Grid,
  Image,
  List,
  Message,
  Modal,
  Segment,
  Table,
} from 'semantic-ui-react';

import FuelNumber from '../number';
import eosLogo from '../../../images/blockchain-eos-logo.svg';

const packages = [
  {
    name: 'basic',
    price: 1000,
  },
  {
    name: 'pro',
    price: 100000,
  },
]

const msPerTransfer = 1;

class FuelControlsOverview extends Component {
  state = { openedModal: false };

  render() {
    const {
      client,
      cosigner,
      purchase,
    } = this.props;
    const {
      openedModal
    } = this.state;
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
            <Segment
              attached="top"
              secondary
              style={{ marginTop: 0 }}
            >
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
                              {pkg.name.toUpperCase()}
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
                {/*
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Divider horizontal>Or</Divider>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={7}>
                    <Segment stacked style={{ marginTop: 0 }}>
                      <Header
                        size="large"
                        textAlign="center"
                      >
                        Enter a custom amount
                      </Header>
                      <Form>
                        <Form.Field>
                          <label htmlFor="amount">
                            Amount of EOS to spend
                            <Form.Input name="amount" type="text" />
                          </label>
                        </Form.Field>
                        <Container textAlign="center">
                          <Button
                            content="Purchase"
                            primary
                            size="large"
                          />
                        </Container>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                */}
                <Grid.Row>
                  <Grid.Column textAlign="center" width={16}>
                    <Button
                      basic
                      onClick={() => this.setState({ openedModal: false })}
                      content="Cancel"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          )}
          closeIcon
          dimmer="inverted"
          header="Purchase Fuel"
          open={openedModal}
          onClose={() => this.setState({ openedModal: false }) }
          trigger={(
            <Segment basic textAlign="center">
              <Button
                onClick={() => this.setState({ openedModal: true })}
                content="Purchase Fuel"
                primary
              />
            </Segment>
          )}
        />
      </React.Fragment>
    )
  }
}

export default FuelControlsOverview;
