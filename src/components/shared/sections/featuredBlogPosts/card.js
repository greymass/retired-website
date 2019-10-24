import React, { Component } from 'react';

import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

import homeBlogPostsCardStyles from './card.module.css';

export default class HomeBlogPostCard extends Component {
  state = {
    primary: false,
  }
  render() {
    const {
      linkTo,
      text,
      inverted
    } = this.props;

    const {
      primary
    } = this.state;

    const primaryInverted = primary && inverted;

    return (
      <Grid.Column mobile={16} tablet={8} computer={3}>
        <Link
          to={linkTo}
          onMouseEnter={() => this.setState({ primary: true})}
          onMouseLeave={() => this.setState({ primary: false})}
        >
          <Container
            className={
              `${homeBlogPostsCardStyles.container} ${
                primary ? homeBlogPostsCardStyles.primaryContainer : ''
              } ${
                primaryInverted ?
                  homeBlogPostsCardStyles.primaryInvertedContainer : ''
              }`
            }
          >
            <h4
              className={
                `${homeBlogPostsCardStyles.text} ${
                  primaryInverted ? homeBlogPostsCardStyles.textInverted : ''
                }`
              }
            >
              {text}
            </h4>
          </Container>
        </Link>
      </Grid.Column>
    )
  }
}
