import React, { Component } from "react"

import Layout from '../components/layout';
import HomeHeader from '../components/home/header';

class Index extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <HomeHeader />
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;
