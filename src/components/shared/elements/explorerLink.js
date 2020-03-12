import React, { Component } from 'react';

const explorers = {
  'eos': 'https://bloks.io',
  'instar': 'https://instar.eosx.io',
  'jungle': 'https://jungle.bloks.io',
  'lynx': 'https://lynx.bloks.io',
  'telos': 'https://telos.bloks.io',
  'wax': 'https://wax.bloks.io',
}

class SharedElementsExplorerLink extends Component {
  render() {
    const {
      chain,
      type,
      value,
    } = this.props;
    let url = explorers[chain]
    // If undefined, just return the text and no link
    if (!url) return value;
    switch(type) {
      case "account":
        url += `/account/${value}`
        break;
    }
    return (
      <a
        href={url}
      >
        {value}
      </a>
    );
  }
}

export default SharedElementsExplorerLink;
