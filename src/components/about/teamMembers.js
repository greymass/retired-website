import React, { Component } from "react"

import { Container, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';
import { graphql, StaticQuery } from "gatsby"

import AboutTeamMembersCard from './teamMembers/card';

class AboutTeamMembers extends Component {
  render() {
    const { data, t } = this.props;

    const containerStyles = {
      backgroundColor: 'white',
      borderBottom: '2px solid #0091E2',
      paddingLeft: '100px',
      paddingRight: '100px',
      textAlign: 'center',
      width: '100%',
    };

    const headerTextStyles = {
      color: '#424954',
      fontFamily: 'Montserrat',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      padding: '40px',
    };

    return (
      <Container style={containerStyles} basic>
        <h4 style={headerTextStyles}>
          {t('team_members_title')}
        </h4>

        <Grid stackable centered padded>
          {data.site.siteMetadata.teamMembers.map((teamMember) => (
            <Grid.Column width={5} style={{ padding: '4%' }}>
              <AboutTeamMembersCard
                name={teamMember.name}
                title={teamMember.title}
                description={teamMember.description}
                profileImages={data.profileImages}
                {...teamMember.socialMedia}
              />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    )
  }
}

const AboutTeamMembersWrapper = translate('about')(AboutTeamMembers);

export default props => (
  <StaticQuery
    query={graphql`
       query {
          site {
            siteMetadata {
              teamMembers {
                description
                name
                title
                socialMedia {
                  facebookLink
                  githubLink
                  linkedinLink
                  twitterLink,
                  youtubeLink,
                }
              }
            }
          }
          profileImages: allFile(filter: {relativeDirectory: {eq: "images/teamMembers"}}) {
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
