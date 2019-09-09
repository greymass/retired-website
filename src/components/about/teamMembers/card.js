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
      imageAlt,
      imageFluid,
      linkedinLink,
      name,
      title,
      twitterLink,
      youtubeLink,
    } = this.props;

    const { expanded } = this.state;

    const bottomContainerStyles = {
      backgroundColor: primary ? '#0091E2' : '#B6BDC9',
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
        <Link to={linkTo}>
          {imageFluid && (
            <Img
              alt={imageAlt}
              fluid={imageFluid}
              style={{ height: '200px' }}
            />
          )}

          <Container style={bottomContainerStyles}>
            <h2 styles={nameStyles}>
              {name}
            </h2>
            <h3 style={titleStyles}>
              {expanded ? title : (
                <div>
                  {`${title.substr(0,200)}...`}
                  <a onClick={setState({ expanded: true})}>
                    {t('team_member_card_read_more')}
                  </a>
                </div>
              )}
            </h3>
            <h4 style={descriptionStyles}>
              {description}
            </h4>
            <Grid>
              <SocialMediaButton name="facebook" link={facebookLink} />
              <SocialMediaButton name="twitter" link={twitterLink} />
              <SocialMediaButton name="linkedin" link={linkedinLink} />
              <SocialMediaButton name="github" link={githubLink} />
              <SocialMediaButton name="youtube" link={youtubeLink} />
            </Grid>
          </Container>
        </Link>
      </Grid.Column>
    )
  }
}

export default translate('about')(AboutTeamMembersCard);

const SocialMediaButton = ({name, link}) => link ? (
  <Grid.Column>
    <Link to={url} >
      <Icon name={name} />
    </Link>
  </Grid.Column>
) : '';

