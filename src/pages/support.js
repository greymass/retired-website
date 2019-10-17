import React, { Component } from 'react';

import Layout from '../components/layout';
import SupportCTA from '../components/support/cta';

class Index extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <SupportCTA
            />
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;
