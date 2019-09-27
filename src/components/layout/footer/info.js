import React, { Component } from 'react';
import { Divider, Grid, Responsive } from "semantic-ui-react"

import FooterInfoResources from './info/resources';
import FooterInfoContact from './info/contact';

import footerInfoStyles from './info.module.css';

class FooterInfo extends Component {
  render() {
    return (
      <div className={footerInfoStyles.container}>
        <Responsive {...Responsive.onlyMobile}>
          <FooterInfoContact />
          <Divider />
          <FooterInfoResources />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid container>
            <Grid.Column
              className={footerInfoStyles.contactInfoContainer}
              width={10}
            >
              <FooterInfoResources />
            </Grid.Column>

            <Grid.Column width={4} floated="right">
              <FooterInfoContact />
            </Grid.Column>
          </Grid>
        </Responsive>
      </div>
    )
  }
}

export default FooterInfo;

