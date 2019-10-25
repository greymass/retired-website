import React, { Component } from "react";
import { translate } from 'react-i18next';
import FooterConnectBanner from './footer/connectBanner';
import FooterInfo from './footer/info';

class Footer extends Component {
  render() {
    return (
     <React.Fragment>
       <FooterConnectBanner />
       <FooterInfo />
     </React.Fragment>
    )
  }
}

export default translate('navbar')(Footer);
