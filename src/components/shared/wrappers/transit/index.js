import React from 'react';

import { initAccessContext } from 'eos-transit';

import scatter from 'eos-transit-scatter-provider';
import anchorLink from 'eos-transit-anchorlink-provider';

import chains from '../../../../constants/chains';

class TransitWrapper extends React.Component {
  state = {
    transitSessions: [],
    currentTransitSession: {},
  };

  async componentDidMount() {
    window.addEventListener('storage', () => {
      this.setTransitSessionsFromStorage();
    });

    await this.setTransitSessionsFromStorage();

    const {
      currentTransitSession
    } = this.state;

    if (currentTransitSession.account && !window.transitWallet) {
      this.login();
    }
  }

  setTransitSessionsFromStorage = async () => {
    const localStorage = window.localStorage;
    const currentTransitSessionString = localStorage.getItem('currentTransitSession') || '{}';
    const transitSessionsString = localStorage.getItem('transitSessions') || '[]';

    await this.setState({
      currentTransitSession: JSON.parse(currentTransitSessionString),
      transitSessions: JSON.parse(transitSessionsString),
    });
  }

  switchAccount = (transitSession) => {
    window.localStorage.setItem(
      'currentTransitSession',
      JSON.stringify(transitSession),
    );
    window.dispatchEvent(new CustomEvent('storage'));

    this.login(transitSession.signer, transitSession.chainName);
  }

  login = async (signerArg, chainNameArg) => {
    const { transitSessions, currentTransitSession } = this.state;

    const signer = signerArg || currentTransitSession.signer;
    const chainName = chainNameArg || currentTransitSession.chainName;

    const wallet = await this.initWallet(signer, chainName);

    let response;

    try {
      await wallet.connect();
      response = await wallet.login();
    } catch(error) {
      console.log('Error connecting and/or logging in:', {error});
      this.setState({ error });

      return { error };
    }
    const { account_name, permissions } = response;

    const account = {
      ...response,
      name: account_name,
      // Figure out how to extract authority from permissions
      authority: permissions[0] && permissions[0].perm_name,
    };

    const newTransitSessions = transitSessions.filter(transitSession => {
      return transitSession.signer !== signer || transitSession.chainName !== chainName;
    });

    newTransitSessions.push({
      account,
      signer,
      chainName,
    });

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

    window.dispatchEvent(new CustomEvent('storage'));

    return { account };
  }

  initWallet = async (signer, chainName) => {
    if (!chains[chainName]) {
      console.log(`Chain ${chainName} is not supported!`);
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
  transact = async (transaction, config) => {
    console.log({transaction})
    try {
      return await window.transitWallet.eosApi.transact(transaction, config);
    } catch(error) {
      this.setState({ error });
    }
  }
  logout = async () => {
    const {
      currentTransitSession,
      transitSessions
    } = this.state;

    if (window.transitWallet) {
      try {
        await window.transitWallet.logout();
      } catch (error) {
        console.log({error});
      }

      window.transitWallet = null;
    }

    const localStorage = window.localStorage;

    const newTransitSessions = transitSessions.filter(transitSession => {
      return transitSession.chainName !== currentTransitSession.chainName ||
             transitSession.account.name !== currentTransitSession.account.name;
    });

    localStorage.setItem('transitSessions', JSON.stringify(newTransitSessions));

    if (newTransitSessions.length > 0) {
      this.switchAccount(newTransitSessions[0])
    } else {
      localStorage.setItem('currentTransitSession', '{}');
    }

    window.dispatchEvent(new CustomEvent('storage'));
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
