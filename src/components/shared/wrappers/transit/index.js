import React from 'react';

import { initAccessContext } from 'eos-transit';

import scatter from 'eos-transit-scatter-provider';
import anchorLink from 'temp-anchorlink-provider';

import chains from '../../../../constants/chains';

class TransitWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transitSessions: [],
      currentTransitSession: {},
    };
  }

  async componentDidMount() {
    window.addEventListener('localStorage', () => {
      console.log('triggered!!!!')
      this.setTransitSessionsFromStorage();
    });

    this.setTransitSessionsFromStorage();

    if (!window.transitWallet) {
      this.login()
    }
  }

  setTransitSessionsFromStorage = () => {
    const localStorage = window.localStorage;
    const currentTransitSession = localStorage.getItem('currentTransitSession') || {};
    const transitSessions = localStorage.getItem('transitSessions') || [];

    this.setState({ currentTransitSession, transitSessions });
  }

  switchAccount = (signer, chainName) => {
    const { transitSession } = this.state;

    const newTransitSession = transitSession.find(transitSession => {
      return transitSession.signer === signer && transitSession.chainName === chainName;
    });

    window.localStorage.setItem(
      'currentTransitSession',
      newTransitSession,
    )
  }

  login = async (signer, chainName) => {
    const { transitSessions, currentTransitSession } = this.state;

    console.log({currentTransitSession})

    const wallet = await this.initWallet(
      signer || currentTransitSession.signer,
      chainName || currentTransitSession.chainName
    );

    console.log({wallet})

    let response;

    try {
      await wallet.connect();
      response = await wallet.login();
      console.log({response})
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

    const otherTransitSessions = transitSessions.filter(transitSession => {
      return transitSession.signer !== signer || transitSession.chainName !== chainName;
    });

    console.log({otherTransitSessions})

    const localStorage = window.localStorage;

    localStorage.setItem(
      'transitSessions',
      JSON.stringify(otherTransitSessions.concat({
        account,
        signer,
        chainName,
      }))
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
  }

  initWallet = async (signer, chainName) => {
    console.log({signer})
    if (!chains[chainName]) {
      throw `Chain ${chainName} is not supported!`;
    }

    const accessContext = initAccessContext({
      appName: 'greymass.com',
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

    selectedProvider.sessionId = signer;

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

    const localStorage = window.localStorage;

    localStorage.setItem('currentTransitSession', null);
    localStorage.setItem('transitSessions', null);
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
