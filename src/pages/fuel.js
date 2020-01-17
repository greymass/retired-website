import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { Container, Grid, Image } from 'semantic-ui-react';

import Layout from '../components/layout';

import FuelLogo from '../images/greymassfuel-horizontal.png'

import FuelControls from '../components/fuel/controls';
import FuelLogin from '../components/fuel/login';
import FuelLoginLoader from '../components/fuel/login/loader';
import FuelTransaction from '../components/fuel/transaction';

import TransitWrapper from '../components/shared/wrappers/transit';

class Fuel extends TransitWrapper {
  purchase = async (pkg) => {
    const { account } = this.state;
    const result = await this.transact({
      actions: [{
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
      account,
      identityRequest,
      signer,
      tx
    } = this.state;
    return (
      <Layout location={location}>
        <Container style={{ minHeight: '600px' }}>
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
            {(!signer)
              ? <FuelLogin setSigner={this.setSigner} />
              : false
            }
            {(signer && !account)
              ? (
                <FuelLoginLoader
                  identityRequest={identityRequest}
                  setSigner={this.setSigner}
                  signer={signer}
                />
              )
              : false
            }
            {(signer && account && !tx)
              ? (
                <FuelControls
                  account={account}
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
          </Grid>
        </Container>
      </Layout>
    )
  }
}

export default injectIntl(Fuel);
