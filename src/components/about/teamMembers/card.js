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
      profileImages.edges.find(edge => edge.node.childImageSharp.fluid.src.includes(firstName.toLowerCase()));

    const bottomContainerStyles = {
      backgroundColor: '#B6BDC9',
      padding: '30px',
      paddingTop: '50px',
      paddingBottom: '50px',
      minHeight: '500px',
    };

    const nameStyles = {
      color: 'white',
      fontFamily: 'Montserrat',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: '0.02em',
      lineHeight: '44px',
    };

    const titleStyles = {
      color: '#424954',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '22px',
      textAlign: 'left',
    };

    const descriptionStyles = {
      color: '#424954',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.02em',
      lineHeight: '22px',
      textAlign: 'left',
    };

    const expandButtonStyles = {
      color: '#0091E2',
      cursor: 'pointer',
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '21px',
      marginLeft: '20px',
    }

    return (
      <Container basic>
        {profileImage && (
          <Img
            alt={`${name} profile image`}
            fluid={profileImage.node.childImageSharp.fluid}
            style={{ height: '250px' }}
          />
        )}

        <Container style={bottomContainerStyles}>
          <h2 style={nameStyles}>
            {name}
          </h2>
          <h3 style={titleStyles}>
            {title}
          </h3>
          <h4 style={descriptionStyles}>
            {expanded ? (
              <div>
                {description}
                <span
                  style={{
                    ...expandButtonStyles,
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '30px',
                  }}
                  onClick={() => this.setState({ expanded: false })}
                >
                  {t('team_member_card_read_less')}
                  <Icon style={{ marginLeft: '5px' }} name="arrow up" />
                </span>
              </div>
            ) : (
              <div>
                {`${description.substr(0,270)}...`}
                <span
                  style={expandButtonStyles}
                  onClick={() => this.setState({ expanded: true })}
                >
                  {t('team_member_card_read_more')}
                </span>
              </div>
            )}
          </h4>

          <Grid style={{ paddingTop: '25px' }}>
            <SocialMediaButton name="facebook" link={facebookLink} />
            <SocialMediaButton name="twitter" link={twitterLink} />
            <SocialMediaButton name="linkedin" link={linkedinLink} />
            <SocialMediaButton name="github" link={githubLink} />
            <SocialMediaButton name="youtube" link={youtubeLink} />
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default translate('about')(AboutTeamMembersCard);

const SocialMediaButton = ({name, link}) => link ? (
  <Grid.Column>
    <Link to={link} >
      <Icon style={{ fontSize: '40px', color: '#424954' }} name={name} />
    </Link>
  </Grid.Column>
) : '';

