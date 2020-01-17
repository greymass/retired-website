import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import { Link } from 'anchor-link';

import { initAccessContext } from 'eos-transit';
import scatter from 'eos-transit-scatter-provider';

import { Api, JsonRpc } from 'eosjs';

const chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
const apiNode = 'https://eos.greymass.com';

class TransitWrapper extends React.Component {
  async constructor(props) {
    super(props);

    await this.initTransit();
    this.initAnchor();
    this.state = {
      account: false,
      signer: false,
      tx: false,
    };
  }
  initTransit = async () => {
    const accessContext = initAccessContext({
      appName: 'my_first_dapp',
      network: {
        host: apiNode,
        port: 443,
        protocol: 'https',
        chainId
      },
      walletProviders: [
        scatter()
      ]
    });

    const walletProviders = accessContext.getWalletProviders();

    const selectedProvider = walletProviders[0];

    const wallet = accessContext.initWallet(selectedProvider);

    await wallet.connect();

    console.log({discoveryData});

    this.setState({wallet} );
  }
  initAnchor = () => {
    const t = this;
    const WebLinkTransport = {
      onRequest: function(request, cancel) {
        console.log(request.encode())
        window.location = request.encode();
        console.log(request, cancel)
      },
      onSuccess: function(request, result) {
        const reqType = request.data.req[0];
        switch (reqType) {
          case 'identity': {
            t.setState({
              account: {
                name: result.signer.actor,
                authority: result.signer.permission,
                blockchain: 'eos',
                chainId,
              }
            })
            break;
          }
          default: {
            console.log(request, result)
          }
        }
      },
      onFailure: function(request, error) {
        console.log(request, error)
      },
    }
    this.link = new Link({
      chainId,
      rpc: apiNode,
      service: 'https://link.dirty.fish',
      transport: WebLinkTransport,
    });
  }
  setSigner = (signer) => {
    const { wallet } = this.state;
    this.setState({ signer }, async () => {
      switch(signer) {
        case "scatter": {
          const discoveryData = await wallet.discover();

          if (discoveryData.keyToAccountMap.length > 0) {
            await wallet.login(accountName, authorization)
          } else {
            await wallet.login();
          }
          break;
        }
        case "anchor": {
          const identityRequest = await this.link.createRequest({
            identity: {permission: undefined},
            info: undefined,
          })
          this.setState({
            identityRequest
          })
          const identity = await this.link.sendRequest(identityRequest)
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
    const { signer, wallet } = this.state;

    switch(signer) {
      case "scatter": {
        return await wallet.eosApi.transact(transaction, config);
      }
      case "anchor": {
        return await this.link.transact(transaction);
      }
      default: {

      }
    }
  }
  logout = () => {
    const { signer, wallet } = this.state;
    switch(signer) {
      case "scatter": {
        wallet.logout();
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
}

export default TransitWrapper;
