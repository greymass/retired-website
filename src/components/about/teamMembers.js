import React, { Component } from "react"

import { Container, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';
import { graphql, StaticQuery } from "gatsby"

import AboutTeamMembersCard from './teamMembers/card';

import aboutTeamMembersStyles from './teamMembers.module.css';

class AboutTeamMembers extends Component {
  render() {
    const { data, t } = this.props;

    const teamMembers = data.allDataJson.edges[0].node.teamMembers;

    return (
      <div className={aboutTeamMembersStyles.container}>
        <Container>
          <h4 className={aboutTeamMembersStyles.headerText}>
            {t('team_members_title')}
          </h4>

          <Grid stackable centered padded>
            {teamMembers.map((teamMember) => (
              <Grid.Column computer={5} tablet={16} mobile={16}>
                <AboutTeamMembersCard
                  description={teamMember.description}
                  name={teamMember.name}
                  profileImages={data.profileImages}
                  title={teamMember.title}
                  {...teamMember.socialMedia}
                />
              </Grid.Column>
            ))}
          </Grid>
        </Container>
      </div>
    )
  }
}

const AboutTeamMembersWrapper = translate('about')(AboutTeamMembers);

export default props => (
  <StaticQuery
    query={graphql`
       query {
          allDataJson(filter: {teamMembers: {elemMatch: {name: {ne: null}}}}) {
            edges {
              node {
                teamMembers {
                  description
                  name
                  title
                }
              }
            }
          }
          profileImages: allFile(filter: {relativeDirectory: {regex: "/teamMembers/"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
       }
    `}
    render={data => <AboutTeamMembersWrapper data={data} {...props} />}
  />
);
