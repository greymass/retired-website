import React, { Component } from "react"

import Layout from '../components/layout';

class Index extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
           HOME PAGE
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;
