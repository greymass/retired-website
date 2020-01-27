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

    modifyGetRequiredKeys(wallet);

    this.setState({ wallet });
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
        let response;

        try {
          await wallet.connect();
          response = await wallet.login();
        } catch(error) {
          console.log(`Error connecting and/or logging in: ${JSON.stringify(error)}`);

          this.setState({ processing: false });

          return alert(
            `Cannot connect to ${
              signer
            }. Please make sure that the wallet app is opened and try again.`
          );
        }
        const { account_name, permissions } = response;
        await this.setState({
          account: {
            ...response,
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
        try {
          return await wallet.eosApi.transact(transaction, config);
        } catch(error) {
          console.log({error});
          alert(`Transaction Error: ${JSON.stringify(error)}`);
        }
      }
      case "anchor": {
        return await this.link.transact(transaction);
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

function modifyGetRequiredKeys(wallet) {
  const api = wallet.eosApi;
  // swizzle out authority provider to ignore the fuel permission
  const getRequiredKeys = api.authorityProvider.getRequiredKeys.bind(api.authorityProvider)
  api.authorityProvider.getRequiredKeys = async (args) => {
    const actions = args.transaction.actions.map((action) => {
      const authorization = action.authorization.filter(
        ({ actor, permission }) =>
          !(actor === 'greymassfuel' && permission === 'cosign'),
      )
      return {
        ...action,
        authorization,
      }
    })
    const transaction = {
      ...args.transaction,
      actions,
    }
    return getRequiredKeys({
      ...args,
      transaction,
    })
  }
}
