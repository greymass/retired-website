import React, { Component } from "react"

import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

export default class HomeBlogPostCard extends Component {
  render() {
    const {
      linkTo,
      primary,
      text,
    } = this.props;

    const containerStyles = {
      backgroundColor: primary ? '#0091E2' : '#B6BDC9',
      padding: '20px',
      paddingTop: '100px',
      paddingBottom: '100px'
    };

    const textStyles = {
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
      <Grid.Column width={primary ? 4 : 3}>
        <Link to={linkTo}>
          <Container style={containerStyles}>
            <h4 style={textStyles}>
              {text}
            </h4>
          </Container>
        </Link>
      </Grid.Column>
    )
  }
}

