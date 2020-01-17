import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import { Link } from 'anchor-link';
import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs2';
import { Api, JsonRpc } from 'eosjs';

const chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
const apiNode = 'https://eos.greymass.com';

class TransitWrapper extends React.Component {
  constructor(props) {
    super(props);
    ScatterJS.plugins(new ScatterEOS());
    this.initScatter();
    this.initAnchor();
    this.state = {
      account: false,
      signer: false,
      tx: false,
    };
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
    const { signer } = this.state;
    let eos;
    switch(signer) {
      case "scatter": {
        return await this.scatter.transact(transaction, config);
      }
      case "anchor": {
        return await this.link.transact(transaction);
      }
      default: {

      }
    }
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
}

export default TransitWrapper;
