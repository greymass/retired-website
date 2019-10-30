import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
import { Grid, Icon } from 'semantic-ui-react';

import Img from 'gatsby-image';

import SocialMediaButton from './card/socialMediaButton';

import aboutTeamMembersCardStyles from './card.module.css';

class AboutTeamMembersCard extends Component {
  state = { expanded: false };

  render() {
    const {
      description,
      facebookLink,
      githubLink,
      intl,
      profileImages,
      linkedinLink,
      name,
      title,
      twitterLink,
      youtubeLink,
    } = this.props;

    const { expanded } = this.state;

    const firstName = name.split(' ')[0];
    const profileImage =
      profileImages.edges.find(edge => edge.node.childImageSharp.fluid.src.includes(firstName.toLowerCase()));

    return (
      <div className={aboutTeamMembersCardStyles.container}>
        {profileImage && (
          <Img
            alt={`${name} profile image`}
            fluid={profileImage.node.childImageSharp.fluid}
            style={{ height: '250px' }}
          />
        )}

        <div className={aboutTeamMembersCardStyles.bottomContainer}>
          <h2 className={aboutTeamMembersCardStyles.name}>
            {name}
          </h2>
          <h3 className={aboutTeamMembersCardStyles.title}>
            {title}
          </h3>
          <h4 className={aboutTeamMembersCardStyles.description}>
            {expanded ? (
              <div>
                {description}
                <span
                  className={`${
                    aboutTeamMembersCardStyles.expandButton
                  } ${
                    aboutTeamMembersCardStyles.expandedButton
                  }`}
                  onClick={() => this.setState({ expanded: false })}
                >
                  {intl.formatMessage({ id: 'team_member_card_read_less' })}
                  <Icon style={{ marginLeft: '5px' }} name="arrow up" />
                </span>
              </div>
            ) : (
              <div>
                {`${description.substr(0,270)}...`}
                <br />
                <br />
                <span
                  className={aboutTeamMembersCardStyles.expandButton}
                  onClick={() => this.setState({ expanded: true })}
                >
                  {intl.formatMessage({ id: 'team_member_card_read_more' })}
                </span>
              </div>
            )}
          </h4>

          <Grid className={aboutTeamMembersCardStyles.grid}>
            <SocialMediaButton name="facebook f" link={facebookLink} />
            <SocialMediaButton name="twitter" link={twitterLink} />
            <SocialMediaButton name="linkedin" link={linkedinLink} />
            <SocialMediaButton name="github" link={githubLink} />
            <SocialMediaButton name="youtube" link={youtubeLink} />
          </Grid>
        </div>
      </div>
    )
  }
}

export default injectIntl(AboutTeamMembersCard);
