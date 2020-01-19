import React from 'react';

import { Link } from 'anchor-link';

import { initAccessContext } from 'eos-transit';
import scatter from 'eos-transit-scatter-provider';

const chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
const apiNode = 'eos.greymass.com';

class TransitWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: false,
      signer: false,
      tx: false,
      wallet: false,
    };
  }

  async componentDidMount() {
    await this.initTransit();
    this.initAnchor();
  }

  initTransit = async () => {
    const accessContext = initAccessContext({
      appName: 'greymass.com',
      network: {
        host: apiNode,
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

    this.setState({ wallet } );
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
  setSigner = async (signer) => {
    const { wallet } = this.state;

    this.setState({ signer });

    switch(signer) {
      case "scatter": {
        await wallet.connect();
        const response = await wallet.login();
        console.log({response})
        const { account_name, permissions } = response;
        await this.setState({
          account: {
            name: account_name,
            authority: permissions[0] && permissions[0].perm_name
          }
        });

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
        await this.link.sendRequest(identityRequest)
        break;
      }
      default: {
        break;
      }
    }
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
