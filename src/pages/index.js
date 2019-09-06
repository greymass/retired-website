import React, { Component } from "react"

import Layout from '../components/layout';
import HomeHeader from '../components/home/header';
import HomeProjects from '../components/home/projects';
import HomeAbout from '../components/home/about';

class Index extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <HomeHeader />
            <HomeProjects />
            <HomeAbout />
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;
