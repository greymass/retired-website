import React, { Component } from 'react';

import Layout from '../components/layout';
import SupportCTA from '../components/support/cta';

class Index extends Component {
  render() {
    const { location } = this.props;

    return (
      <Layout location={location}>
        <SupportCTA />
      </Layout>
    )
  }
}

export default Index;
