import React from "react"

import AboutHeader from '../components/about/header';
import AboutTeamMembers from '../components/about/teamMembers';
import Layout from '../components/layout';

class About extends React.Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <AboutHeader />
            <AboutValues />
            <AboutTeamMembers />
          </div>
        )}
      </Layout>
    )
  }
}

export default About;
