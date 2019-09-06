import React, { Component } from "react"

import Layout from '../components/layout';
import HomeHeader from '../components/home/header';
import HomeProjects from '../components/home/projects';
import HomeAbout from '../components/home/about';
import HomeBlogPosts from '../components/home/blogPosts';
import HomeNewsletter from '../components/home/newsletter';

class Index extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <HomeHeader />
            <HomeProjects />
            <HomeAbout />
            <HomeBlogPosts />
            <HomeNewsletter />
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;
