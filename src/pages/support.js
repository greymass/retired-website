import React, { Component } from 'react';

import Layout from '../components/layout';
import SupportCTA from '../components/support/cta';
import HomeProjects from '../components/home/projects';
import HomeAbout from '../components/home/about';
import FeaturedBlogPosts from '../components/shared/sections/featuredBlogPosts';
import HomeNewsletter from '../components/home/newsletter';

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
