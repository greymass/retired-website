import React from 'react';

import { initAccessContext } from 'eos-transit';

import scatter from 'eos-transit-scatter-provider';
import anchorLink from 'eos-transit-anchorlink-provider';

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
    this.setState({
      wallet: window.transitWallet,
      account: window.transitAccount,
      signer: window.transitSigner,
    })
  }

  initTransit = async (signer) => {
    const accessContext = initAccessContext({
      appName: 'greymass.com',
      network: {
        host: apiNode,
        protocol: 'https',
        chainId,
        port: 443
      },
      walletProviders: [
        scatter(),
        anchorLink(),
      ]
    });

    const walletProviders = accessContext.getWalletProviders();

    console.log({signer})

    const selectedProvider = walletProviders.filter((provider) => {
      return provider.id === signer;
    })[0];

    selectedProvider.sessionId = signer;

    const wallet = accessContext.initWallet(selectedProvider);

    modifyGetRequiredKeys(wallet);

    window.transitWallet = wallet;

    this.setState({ signer, wallet });

    return wallet;
  }

  setSigner = async (signer) => {
    const wallet = await this.initTransit(signer);

    let response;

    console.log({wallet})

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

    const account = {
      ...response,
      name: account_name,
      authority: permissions[0] && permissions[0].perm_name
    };

    await this.setState({ account });

    window.transitAccount = account;
    window.transitSigner = signer;
  }
  clearTx = () => this.setState({ tx: false })
  transact = async (transaction, config) => {
    const { wallet } = this.state;

    try {
      return await wallet.eosApi.transact(transaction, config);
    } catch(error) {
      console.log({error});

      const cancelledRequest = JSON.stringify(error).includes('CANCEL');

      if (!cancelledRequest) {
        alert(`Transaction Error: ${JSON.stringify(error)}`);
      }
    }
  }
  logout = () => {
    const { wallet } = this.state;

    wallet.logout();

    window.transitWallet = null;
    window.transitSigner = null;

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
