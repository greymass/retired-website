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
      textAlign: 'center',
      width: '100%',
      borderBottom: '2px solid #0091E2',
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
            <AboutTeamMembersCard
              name={teamMember.name}
              title={teamMember.title}
              description={teamMember.description}
              {...teamMember.socialMedia}
            />
          ))}
        </Grid>
      </Container>
    )
  }
}

const AboutTeamMembersWrapper = translate('home')(AboutTeamMembers);

export default props => (
  <StaticQuery
    query={graphql`
       query {
          site {
            siteMetadata {
              teamMembers {
                edges {
                  node {
                    description
                    name
                    socialMedia
                    title
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
