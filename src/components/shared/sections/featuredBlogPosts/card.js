import React, { Component } from 'react';

import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

import homeBlogPostsCardStyles from './card.module.css';

export default class HomeBlogPostCard extends Component {
  state = {
    inverted: false,
  }
  render() {
    const {
      linkTo,
      text,
    } = this.props;

    const {
      inverted
    } = this.state;

    return (
      <Grid.Column mobile={16} tablet={8} computer={inverted ? 4 : 3}>
        <Link
          to={linkTo}
          onMouseEnter={() => this.setState({ inverted: true})}
          onMouseLeave={() => this.setState({ inverted: false})}
        >
          <Container
            className={
              `${homeBlogPostsCardStyles.container} ${
                inverted ? homeBlogPostsCardStyles.primaryContainer : ''
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

