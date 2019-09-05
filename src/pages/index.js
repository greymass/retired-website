import React, { Component } from "react"

import Layout from '../components/layout';
import HomeHeader from '../components/home/header';
import HomeProjects from '../components/home/projects';

class Index extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <HomeHeader />
            <HomeProjects />
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;
