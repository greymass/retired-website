import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, StaticQuery } from 'gatsby';
import { Button, Container, Dimmer, Header, Grid, Image, Loader, Segment } from 'semantic-ui-react';

import { Link } from 'anchor-link';
import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs2';
import { Api, JsonRpc } from 'eosjs';

import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';
import FuelLogo from '../images/greymassfuel-horizontal.png'

import FuelControls from '../components/fuel/controls';
import FuelLogin from '../components/fuel/login';
import FuelLoginLoader from '../components/fuel/login/loader';
import FuelTransaction from '../components/fuel/transaction';

const chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
const apiNode = 'https://eos.greymass.com';

const link = new Link({
  chainId,
  rpc: apiNode,
  service: 'https://link.dirty.fish',
});

class Fuel extends React.Component {
  constructor(props) {
    super(props);
    ScatterJS.plugins(new ScatterEOS());
    this.initScatter();
    this.state = {
      account: false,
      signer: false,
      tx: false,
    };
  }
  initScatter = () => {
    const rpc = new JsonRpc(apiNode)
    this.scatterNetwork = ScatterJS.Network.fromJson({
      blockchain: 'eos',
      chainId,
    });
    this.scatter = ScatterJS.eos(this.scatterNetwork, Api, {
      rpc
    });
  }
  setSigner = (signer) => {
    const { anchor, scatter, scatterNetwork } = this;
    this.setState({ signer }, async () => {
      switch(signer) {
        case "scatter": {
          this.detect = setInterval(() => {
            if (ScatterJS.identity) {
              this.setState({ account: ScatterJS.account('eos') })
              clearInterval(this.detect)
            }
          }, 100)
          const connected = await ScatterJS.connect('greymass.com', { scatterNetwork })
          if(!connected) return false;
          await ScatterJS.login({ accounts: [scatterNetwork] })
          break;
        }
        case "anchor": {
          const identityRequest = await link.createRequest({
            identity: {permission: undefined},
            info: undefined,
          })
          this.setState({
            identityRequest
          })
          const identity = await link.sendRequest(identityRequest)
          this.setState({
            account: {
              name: identity.signer.actor,
              authority: identity.signer.permission,
              blockchain: 'eos',
              chainId,
            }
          })
          break;
        }
        default: {
          // reset
          clearInterval(this.detect)
        }
      }
    })
  }
  clearTx = () => this.setState({ tx: false })
  transact = async (transaction, config) => {
    const { signer } = this.state;
    let eos;
    switch(signer) {
      case "scatter": {
        eos = this.scatter;
        break;
      }
      case "anchor": {
        break;
      }
      default: {

      }
    }
    return await eos.transact(transaction, config);
  }
  deposit = async (amount) => {
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
          quantity: '0.0001 EOS',
          memo: account.name,
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    this.setState({
      tx: result
    })
  }
  logout = () => {
    const { signer } = this.state;
    switch(signer) {
      case "scatter": {
        ScatterJS.logout();
        this.initScatter();
        break;
      }
      case "anchor": {
        break;
      }
      default: {

      }
    }
    this.setState({
      account: false,
      signer: false,
    })
  }
  render() {
    const {
      data,
      intl,
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
                  deposit={this.deposit}
                  logout={this.logout}
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
