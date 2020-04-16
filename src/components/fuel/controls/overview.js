import React, { Component } from "react";
import { Button,
  Card,
  Header,
  Grid,
  Image,
  List,
  Message,
  Modal,
  Segment,
  Table,
} from 'semantic-ui-react';

import { injectIntl } from 'gatsby-plugin-intl';

import FuelNumber from '../number';
import eosLogo from '../../../images/blockchains/eos.svg';

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
      intl,
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
              {intl.formatMessage({ id: 'fuel_overview_header_network' })}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              {intl.formatMessage({ id: 'fuel_overview_header_quotas' })}
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
          header={intl.formatMessage({ id: 'fuel_overview_message_wait_times_title' })}
          content={intl.formatMessage({ id: 'fuel_overview_message_wait_times_content' })}
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
                      {intl.formatMessage({ id: 'fuel_overview_header_please_select' })}
                    </Header>
                    <Card.Group centered>
                      {packages.map((pkg) => (
                        <Card color="blue">
                          <Card.Content>
                            <Card.Header>
                              {pkg.name.toUpperCase()}
                            </Card.Header>
                            <Card.Meta>
                              <span className='date'>
                                {pkg.price / cosigner.fee_ms}
                                {intl.formatMessage({ id: 'fuel_overview_card_meta' })}
                              </span>
                            </Card.Meta>
                            <Card.Description>
                              <List>
                                <List.Item>
                                  {intl.formatMessage(
                                    {id: 'fuel_overview_list_item_token_amount' },
                                    { tokenAmount: (pkg.price / cosigner.fee_ms / msPerTransfer) }
                                  )}
                                  </List.Item>
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
                              content={intl.formatMessage({id: 'fuel_overview_purchase' })}
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
                      content={intl.formatMessage({id: 'fuel_overview_cancel' })}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          )}
          closeIcon
          dimmer="inverted"
          header={intl.formatMessage({id: 'fuel_overview_purchase_fuel' })}
          open={openedModal}
          onClose={() => this.setState({ openedModal: false }) }
          trigger={(
            <Segment basic textAlign="center">
              <Button
                onClick={() => this.setState({ openedModal: true })}
                content={intl.formatMessage({id: 'fuel_overview_purchase_fuel' })}
                primary
              />
            </Segment>
          )}
        />
      </React.Fragment>
    )
  }
}

export default injectIntl(FuelControlsOverview);
