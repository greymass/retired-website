import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
import { Card, Grid, Icon } from 'semantic-ui-react';

import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image';

import SocialMediaButton from './card/socialMediaButton';

import aboutTeamMembersCardStyles from './card.module.css';

class HomeProjectCard extends Component {
  state = { expanded: false };

  render() {
    const {
      description,
      facebookLink,
      githubLink,
      intl,
      linkedinLink,
      name,
      profileImages,
      title,
      twitterLink,
      youtubeLink,
    } = this.props;

    const { expanded } = this.state;

    const firstName = name.split(' ')[0];
    const profileImage =
      profileImages.edges.find(edge => {
        return edge.node.childImageSharp.fluid.src.includes(firstName.toLowerCase())
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
            alt={`${name} profile image`}
            fluid={profileImage.node.childImageSharp.fluid}
          />
        )}
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {title}
          </Card.Meta>
          <Card.Description>
            {expanded ? (
              <p>
                {description}
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
                {`${description.substr(0,270)}...`}
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

const HomeProjectCardWrapper = injectIntl(HomeProjectCard)

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
    render={data => <HomeProjectCardWrapper data={data} {...props} />}
  />
);

