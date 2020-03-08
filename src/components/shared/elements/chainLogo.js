import React, { Component } from 'react';
import {
  Image,
} from "semantic-ui-react"

import chains from '../../../constants/chains';

import eosLogo from '../../../images/blockchains/eos.png';
import jungleLogo from '../../../images/blockchains/jungle.png';
import telosLogo from '../../../images/blockchains/telos.jpg';
import waxLogo from '../../../images/blockchains/wax.png';

const logos = {
  'eos': eosLogo,
  'jungle': jungleLogo,
  'telos': telosLogo,
  'wax': waxLogo,
}

class SharedElementsChainLogo extends Component {
  render() {
    const {
      chain,
    } = this.props;
    return (
      <Image
        centered
        src={logos[chain]}
        size="small"
      />
    );
  }
}

export default SharedElementsChainLogo;
