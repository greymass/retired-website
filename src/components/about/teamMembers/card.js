import React, { Component } from "react"

import { Container, Grid, Icon } from 'semantic-ui-react';

import { translate} from 'react-i18next';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

class AboutTeamMembersCard extends Component {
  state = { expanded: false };

  render() {
    const {
      description,
      facebookLink,
      githubLink,
      profileImages,
      linkedinLink,
      name,
      t,
      title,
      twitterLink,
      youtubeLink,
    } = this.props;

    const { expanded } = this.state;

    const firstName = name.split(' ')[0];

    const profileImage =
      profileImages.edges.find(edge => edge.node.childImageSharp.src.includes(firstName));

    const bottomContainerStyles = {
      backgroundColor: '#B6BDC9',
      padding: '20px',
      paddingTop: '50px',
      paddingBottom: '50px'
    };

    const nameStyles = {

    };

    const titleStyles = {

    };

    const descriptionStyles = {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '22px',
      textAlign: 'center',
    };

    return (
      <Grid.Column width={4}>
        {profileImage && (
          <Img
            alt={`${name} profile image`}
            fluid={profileImage.node.childImageSharp.fluid}
            style={{ height: '200px' }}
          />
        )}

        <Container style={bottomContainerStyles}>
          <h2 styles={nameStyles}>
            {name}
          </h2>
          <h3 style={titleStyles}>
            {description}
          </h3>
          <h4 style={descriptionStyles}>
            {expanded ? title : (
              <div>
                {`${title.substr(0,200)}...`}
                <Container basic onClick={this.setState({ expanded: true})}>
                  {t('team_member_card_read_more')}
                </Container>
              </div>
            )}
          </h4>

          <Grid>
            <SocialMediaButton name="facebook" link={facebookLink} />
            <SocialMediaButton name="twitter" link={twitterLink} />
            <SocialMediaButton name="linkedin" link={linkedinLink} />
            <SocialMediaButton name="github" link={githubLink} />
            <SocialMediaButton name="youtube" link={youtubeLink} />
          </Grid>
        </Container>
      </Grid.Column>
    )
  }
}

export default translate('about')(AboutTeamMembersCard);

const SocialMediaButton = ({name, url}) => url ? (
  <Grid.Column>
    <Link to={url} >
      <Icon name={name} />
    </Link>
  </Grid.Column>
) : '';

