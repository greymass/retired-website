import React from 'react';

import { initAccessContext } from 'eos-transit';

import scatter from 'eos-transit-scatter-provider';
import anchorLink from 'temp-anchorlink-provider';

import chains from '../../../../constants/chains';

class TransitWrapper extends React.Component {
  state = {
    transitSessions: [],
    currentTransitSession: {},
  };

  async componentDidMount() {
    window.addEventListener('storage', () => {
      console.log('triggered!!!!')
      this.setTransitSessionsFromStorage();
    });

    const currentTransitSession = this.setTransitSessionsFromStorage();

    if (!window.transitWallet) {
      this.login(currentTransitSession.signer, currentTransitSession.chainName);
    }
  }

  setTransitSessionsFromStorage = () => {
    const localStorage = window.localStorage;
    const currentTransitSessionString = localStorage.getItem('currentTransitSession') || '{}';
    const transitSessionsString = localStorage.getItem('transitSessions') || '[]';

    this.setState({
      currentTransitSession: JSON.parse(currentTransitSessionString),
      transitSessions: JSON.parse(transitSessionsString),
    });

    return JSON.parse(currentTransitSessionString);
  }

  switchAccount = (signer, chainName) => {
    const { transitSessions } = this.state;

    const newTransitSession = transitSessions.find(transitSession => {
      return transitSession.signer === signer && transitSession.chainName === chainName;
    });

    window.localStorage.setItem(
      'currentTransitSession',
      newTransitSession,
    );
    window.dispatchEvent(new CustomEvent("storage"));
  }

  login = async (signer, chainName) => {
    const { transitSessions, currentTransitSession } = this.state;

    console.log({state: this.state})

    const wallet = await this.initWallet(
      signer || currentTransitSession.signer,
      chainName || currentTransitSession.chainName
    );

    let response;

    console.log('logging in')

    try {
      await wallet.connect();
      response = await wallet.login();
    } catch(error) {
      console.log(`Error connecting and/or logging in: ${JSON.stringify(error)}`);

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
      authority: permissions[0] && permissions[0].perm_name,
    };

    console.log({transitSessionsInLogin: transitSessions})

    const newTransitSessions = transitSessions.filter(transitSession => {
      return transitSession.signer !== signer || transitSession.chainName !== chainName;
    });

    console.log({first: newTransitSessions});

    newTransitSessions.push({
      account,
      signer,
      chainName,
    });

    console.log({second: newTransitSessions})

    const localStorage = window.localStorage;

    localStorage.setItem(
      'transitSessions',
      JSON.stringify(newTransitSessions)
    );

    localStorage.setItem(
      'currentTransitSession',
      JSON.stringify({
        account,
        signer,
        chainName,
        loggedInAt: (new Date()).toString(),
      })
    );

    window.dispatchEvent(new CustomEvent("storage"));
  }

  initWallet = async (signer, chainName) => {
    console.log('initWallet')
    if (!chains[chainName]) {
      throw `Chain ${chainName} is not supported!`;
    }

    const accessContext = initAccessContext({
      appName: `greymass.com - ${chainName}`,
      network: {
        host: chains[chainName].apiNode,
        protocol: 'https',
        chainId: chains[chainName].chainId,
        port: 443
      },
      walletProviders: [
        scatter(),
        anchorLink(),
      ]
    });

    const walletProviders = accessContext.getWalletProviders();

    const selectedProvider = walletProviders.filter((provider) => {
      return provider.id === signer;
    })[0];

    selectedProvider.sessionId = `${signer} - ${chainName}`;

    const wallet = accessContext.initWallet(selectedProvider);

    modifyGetRequiredKeys(wallet);

    window.transitWallet = wallet;

    return wallet;
  }

  clearTx = () => this.setState({ tx: false })
  transact = async (signer, accountName, transaction, config) => {
    const { transitSessions } = this.state;

    const transitSession = transitSessions.find(session => {
      return session.signer === signer && session.account.name === accountName;
    });

    try {
      return await transitSession.wallet.eosApi.transact(transaction, config);
    } catch(error) {
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

    const localStorage = window.localStorage;

    localStorage.setItem('currentTransitSession', null);
    localStorage.setItem('transitSessions', null);

    window.dispatchEvent(new CustomEvent("storage"));
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
