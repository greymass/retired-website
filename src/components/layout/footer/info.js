import React, { Component } from 'react';
import {
  // Divider,
  Grid,
  // Responsive
} from "semantic-ui-react"

import FooterInfoResources from './info/resources';
import FooterInfoContact from './info/contact';

import footerInfoStyles from './info.module.css';

class FooterInfo extends Component {
  render() {
    // TODO: Responsive logic needs reworking
    // <Responsive {...Responsive.onlyMobile}>
    //   <FooterInfoContact />
    //   <Divider />
    //   <FooterInfoResources />
    // </Responsive>
    // <Responsive minWidth={Responsive.onlyTablet.minWidth}>
    //   <Grid container>
    //     <Grid.Column
    //       className={footerInfoStyles.contactInfoContainer}
    //       width={10}
    //     >
    //       <FooterInfoResources />
    //     </Grid.Column>
    //
    //     <Grid.Column tablet={6} computer={5} floated="right">
    //       <FooterInfoContact />
    //     </Grid.Column>
    //   </Grid>
    // </Responsive>
    return (
      <div className={footerInfoStyles.container}>
        <Grid container className={footerInfoStyles.container}>
          <Grid.Column
            width={10}
          >
            <FooterInfoResources />
          </Grid.Column>

          <Grid.Column tablet={6} computer={5} floated="right">
            <FooterInfoContact />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default FooterInfo;
