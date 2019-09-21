import React, { Component } from 'react';

import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

import homeBlogPostsCardStyles from './card.module.css';

export default class HomeBlogPostCard extends Component {
  render() {
    const {
      linkTo,
      primary,
      text,
    } = this.props;

    return (
      <Grid.Column width={primary ? 6 : 3}>
        <Link to={linkTo}>
          <Container
            className={
              `${homeBlogPostsCardStyles.container} ${
                primary ? homeBlogPostsCardStyles.primaryContainer : ''
              }`
            }
          >
            <h4 className={homeBlogPostsCardStyles.text}>
              {text}
            </h4>
          </Container>
        </Link>
      </Grid.Column>
    )
  }
}

