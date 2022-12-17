import React, { Component } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { Container, Grid } from "semantic-ui-react";

import { graphql, StaticQuery } from "gatsby";

import AboutTeamMembersCard from "./teamMembers/card";

import aboutTeamMembersStyles from "./teamMembers.module.css";

class AboutTeamMembers extends Component {
  render() {
    const { data, intl } = this.props;

    const teamMembers = data.teamMembers.edges;

    return (
      <div className={aboutTeamMembersStyles.container}>
        <Container>
          <h4 className={aboutTeamMembersStyles.headerText}>
            {intl.formatMessage({ id: "about_team_members_title" })}
          </h4>

          <Grid stackable centered padded>
            {teamMembers.map(({ node: teamMember }) => {
              return (
                <Grid.Column computer={5} tablet={16} mobile={16}>
                  <AboutTeamMembersCard
                    key={teamMember.key}
                    teamMemberKey={teamMember.key}
                    profileImages={data.profileImages}
                    {...teamMember.socialMedia}
                  />
                </Grid.Column>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

const AboutTeamMembersWrapper = injectIntl(AboutTeamMembers);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        teamMembers: allTeamMembersJson(sort: { fields: joined }) {
          edges {
            node {
              key
              socialMedia {
                facebookLink
                githubLink
                linkedinLink
                twitterLink
              }
            }
          }
        }
      }
    `}
    render={data => <AboutTeamMembersWrapper data={data} {...props} />}
  />
);
