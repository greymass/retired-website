import React, { Component } from "react"

import Layout from '../components/layout';
import Header from '../components/projects/header';
import ProjectList from '../components/projects/projectList';
import FeaturedProject from '../components/projects/featuredProject';

class Projects extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <Header />
            <ProjectList category="eos" primary />
            <FeaturedProject />
            <ProjectList category="steem" />
            <ProjectList category="others" />
          </div>
        )}
      </Layout>
    )
  }
}

export default Projects;
