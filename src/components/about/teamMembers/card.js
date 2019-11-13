import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
import { Card, Grid, Icon } from 'semantic-ui-react';

import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image';

import SocialMediaButton from './card/socialMediaButton';

import aboutTeamMembersCardStyles from './card.module.css';

class TeamMemberProjectCard extends Component {
  state = { expanded: false };

  render() {
    const {
      facebookLink,
      githubLink,
      intl,
      teamMemberKey,
      linkedinLink,
      profileImages,
      twitterLink,
      youtubeLink,
    } = this.props;

    const { expanded } = this.state;

    const profileImage =
      profileImages.edges.find(edge => {
        return edge.node.childImageSharp.fluid.src.includes(teamMemberKey)
      });

    return (
      <Card
        className={
          `${
            aboutTeamMembersCardStyles.top} ${aboutTeamMembersCardStyles.container
          } ${
            aboutTeamMembersCardStyles.teamMember} ${aboutTeamMembersCardStyles.card
          }`}
      >
        {profileImage && (
          <Img
            alt={`${teamMemberKey} profile image`}
            fluid={profileImage.node.childImageSharp.fluid}
          />
        )}
        <Card.Content>
          <Card.Header>
            {intl.formatMessage({ id: `about_team_member_${teamMemberKey}_name` })}
          </Card.Header>
          <Card.Meta>
            {intl.formatMessage({ id: `about_team_member_${teamMemberKey}_title` })}
          </Card.Meta>
          <Card.Description>
            {expanded ? (
              <p>
                {intl.formatMessage({ id: `about_team_member_${teamMemberKey}_description` })}
                <span
                  className={`${
                    aboutTeamMembersCardStyles.expandButton
                  } ${
                    aboutTeamMembersCardStyles.expandedButton
                  }`}
                  onClick={() => this.setState({ expanded: false })}
                >
                  {intl.formatMessage({ id: 'about_team_member_card_read_less' })}
                  <Icon className={aboutTeamMembersCardStyles.icon} name="arrow up" />
                </span>
              </p>
            ) : (
              <p>
                {
                  `${intl
                      .formatMessage({ id:  `about_team_member_${teamMemberKey}_description` })
                      .substr(0,270)}...`
                }
                <br />
                <br />
                <span
                  className={aboutTeamMembersCardStyles.expandButton}
                  onClick={() => this.setState({ expanded: true })}
                >
                  {intl.formatMessage({ id: 'about_team_member_card_read_more' })}
                </span>
              </p>
            )}
          </Card.Description>
          <Grid className={aboutTeamMembersCardStyles.grid}>
            <SocialMediaButton name="facebook f" link={facebookLink} />
            <SocialMediaButton name="twitter" link={twitterLink} />
            <SocialMediaButton name="linkedin" link={linkedinLink} />
            <SocialMediaButton name="github" link={githubLink} />
            <SocialMediaButton name="youtube" link={youtubeLink} />
          </Grid>
        </Card.Content>

      </Card>
    );
  }
};

const TeamMemberProjectCardWrapper = injectIntl(TeamMemberProjectCard)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(name: {eq: "projectPlaceholder"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <TeamMemberProjectCardWrapper data={data} {...props} />}
  />
);

