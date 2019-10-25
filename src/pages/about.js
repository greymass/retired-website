import React from 'react';



import AboutValues from '../components/about/values';
import AboutTeamMembers from '../components/about/teamMembers';
import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';

class About extends React.Component {
  render() {
    return (
      <Layout>
        <SharedHeader
          title={'header_title'}
          paragraph={'header_paragraph'}
        />
        <AboutValues />
        <AboutTeamMembers />
      </Layout>
    )
  }
}

export default About;
