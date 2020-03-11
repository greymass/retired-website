import React, { Component } from 'react';
import {
  Image,
} from "semantic-ui-react"

import chains from '../../../constants/chains';

import eosLogo from '../../../images/blockchains/eos.png';
import fioLogo from '../../../images/blockchains/fio.svg';
import instarLogo from '../../../images/blockchains/instar.svg';
import jungleLogo from '../../../images/blockchains/jungle.png';
import lynxLogo from '../../../images/blockchains/lynx.svg'
import telosLogo from '../../../images/blockchains/telos.png';
import waxLogo from '../../../images/blockchains/wax.png';

const logos = {
  'eos': eosLogo,
  'fio': fioLogo,
  'instar': instarLogo,
  'jungle': jungleLogo,
  'lynx': lynxLogo,
  'telos': telosLogo,
  'wax': waxLogo,
}

class SharedElementsChainLogo extends Component {
  render() {
    const {
      chain,
      size,
    } = this.props;
    return (
      <Image
        centered
        src={logos[chain]}
        size={size || 'small'}
      />
    );
  }
}

export default SharedElementsChainLogo;
