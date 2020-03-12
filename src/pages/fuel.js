import React from 'react';
import { Link } from "gatsby";
import { injectIntl } from 'gatsby-plugin-intl';
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Message,
  Image,
  Segment,
} from 'semantic-ui-react';

import Layout from '../components/layout';

import FuelLogo from '../images/greymassfuel-horizontal.png'

import FuelControls from '../components/fuel/controls';
import FuelLogin from '../components/fuel/login';
import FuelLoginLoader from '../components/fuel/login/loader';
import FuelTransaction from '../components/fuel/transaction';
import FuelUnavailable from '../components/fuel/unavailable';

import SharedElementsChainLogo from '../components/shared/elements/chainLogo';
import TransitWrapper from '../components/shared/wrappers/transit';

import fuelStyles from './fuel.module.css';

const chains = ['eos', 'jungle'];

class Fuel extends TransitWrapper {
  purchase = async (pkg) => {
    const { currentTransitSession } = this.state;
    const {
      account,
      signer
    } = currentTransitSession;
    const result = await this.transact({
      actions: [{
        authorization: [{
          actor: 'greymassfuel',
          permission: 'cosign',
        }],
        account: 'greymassnoop',
        name: 'noop',
        data: {}
      }, {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: account.name,
          permission: account.authority,
        }],
        data: {
          from: account.name,
          to: 'fuelcontrols',
          quantity: `${(pkg.price / 10000).toFixed(4)} EOS`,
          memo: account.name,
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 120,
    });
    this.setState({
      tx: result
    })
  }
  render() {
    const {
      location
    } = this.props;

    const {
      currentTransitSession,
      tx,
    } = this.state;

    const {
      account,
      chainName,
      signer
    } = currentTransitSession;

    return (
      <Layout location={location}>
        <Container>
          <Grid padded>
            <Grid.Row centered>
              <Grid.Column width={10} textAlign="center">
                <Image
                  alt='greymassfuel-header-image'
                  src={FuelLogo}
                  style={{ margin: '3em 0' }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <div className={fuelStyles.interface}>
          <Container>
            <Grid stackable>
              <Grid.Row centered>
                <Grid.Column width={10} textAlign="center">
                  {(!account)
                    ? <FuelLogin setSigner={this.setSigner} />
                    : false
                  }
                  {(signer && !account)
                    ? (
                      <FuelLoginLoader
                        setSigner={this.setSigner}
                        signer={signer}
                      />
                    )
                    : false
                  }
                  {(signer && account && !chains.includes(chainName))
                    ? (
                      <FuelUnavailable
                        chainName={chainName}
                      />
                    )
                    : false
                  }
                  {(signer && account && chains.includes(chainName) && !tx)
                    ? (
                      <FuelControls
                        account={account}
                        chainName={chainName}
                        logout={this.logout}
                        purchase={this.purchase}
                        signer={signer}
                      />
                    )
                    : false
                  }
                  {(tx)
                    ? (
                      <FuelTransaction
                        clearTx={this.clearTx}
                        tx={tx}
                      />
                    )
                    : false
                  }
                  <Message
                    header="Fuel is a BETA product"
                    content="If you encounter any issues while using Fuel, please contact us for assitance."
                    textAlign="left"
                    size="large"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div className={fuelStyles.container}>
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={10}>
                  <Segment basic padded size="large">
                    <Header size="huge">
                      What is Fuel?
                    </Header>
                    <p>
                      Fuel is a product developed by Greymass with the goal of being a turn key solution for resource billing. It serves two purposes:
                    </p>
                    <List bulleted relaxed>
                      <List.Item>
                        <strong>For EOSIO users:</strong>
                        {' '}
                        Every account on compatible EOSIO ecosystems are given 5ms free CPU to perform transactions and can purchase additional Fuel. It provides an alternative to staking or using REX.
                      </List.Item>
                      <List.Item>
                        <strong>For developers:</strong>
                        {' '}
                        Fuel allows application developers involved in the EOSIO ecosystem to cover the resource costs (NET/CPU) of their users.
                      </List.Item>
                    </List>
                    <p>
                      For more information,
                      {' '}
                      <Link
                        to="/en/blog/greymass-fuel-a-turn-key-solution-to-cover-the-resource-costs-of-app-users/"
                      >
                        please check out our announcement post
                      </Link>
                      .
                    </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Segment color="purple" size="large" style={{ marginTop: '3em' }}>
                    <Header>
                      Want to use Fuel in your app?
                    </Header>
                    <p>
                      Any application can integrate Fuel (for free) to give their users 5ms of free CPU time. Simply
                      {' '}
                      <Link
                        to="/en/blog/integrating-fuel-using-eosjs-v20/"
                      >
                        follow the instructions provided
                      </Link>
                      {' '}
                      to get started.
                    </p>
                    <p>
                      If you'd like to go above and beyond the 5ms provided - please contact us either through our
                      {' '}
                      <a
                        href="https://t.me/greymassfuel"
                      >
                        Fuel telegram channel
                      </a>
                      {' '}
                      or
                      {' '}
                      <a
                        href="mailto:team@greymass.com"
                      >
                        via email
                      </a>
                      .
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <Segment basic size="large">
                    <Divider horizontal>
                      <Header size="huge" textAlign="center">
                        Where can I use Fuel?
                      </Header>
                    </Divider>
                    <p>
                      Fuel can be used by any wallet or application that integrates it, or any application that integrates with the Anchor wallet.
                      {' '}
                      <Link
                        to="/en/blog/5ms-worth-of-free-transactions-available-now-in-anchor-wallet/"
                      >
                        Anchor has Fuel built directly into it
                      </Link>
                      {' '}
                      and allows you to toggle its usage for any EOSIO transaction.
                    </p>
                    <p>
                      Fuel is currently available on the following EOSIO networks:
                    </p>
                    <Grid>
                      <Grid.Row columns={2}>
                        <Grid.Column textAlign="center">
                          <SharedElementsChainLogo
                            chain="eos"
                          />
                          <Header>
                            EOS
                          </Header>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                          <SharedElementsChainLogo
                            chain="jungle"
                          />
                          <Header>
                            Jungle 2 (Testnet)
                          </Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    <p style={{ marginTop: '2em', textAlign: 'center' }}>
                      Additional networks will be made available with time and upon demand.
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <Segment basic size="large">
                    <Divider horizontal>
                      <Header size="huge" textAlign="center">
                        Questions? Want to learn more?
                      </Header>
                    </Divider>
                    <p>
                      Fuel is a product actively being developed and more information will be formally released over time.
                    </p>
                    <p>
                      While we're still building, feel free to join our
                      {' '}
                      <a
                        href="https://t.me/greymassfuel"
                      >
                        Fuel telegram channel
                      </a>
                      {' '}
                      or
                      {' '}
                      <a
                        href="mailto:team@greymass.com"
                      >
                        contact us via email
                      </a>
                      .
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Fuel);
