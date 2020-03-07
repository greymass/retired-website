import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import BlogPostContent from './body/content'

import blogPostBodyStyles from './body.module.css';

class BlogPostBody extends Component {
  render() {
    const { post } = this.props;

    return (
      <Container className={blogPostBodyStyles.markdownContainer}>
        <BlogPostContent post={post} />
      </Container>
    )
  }
}

export default BlogPostBody;
