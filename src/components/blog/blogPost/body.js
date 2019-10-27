import React, { Component } from 'react';

import { Container, Responsive } from 'semantic-ui-react';

import BlogPostDate from './body/date';
import BlogPostDesktop from './body/desktop'

import blogPostStyles from './body.module.css';

class BlogPostBody extends Component {
  render() {
    const { post, versionData } = this.props;
    // TODO: Responsive logic needs reworking
    // <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
    //   <div dangerouslySetInnerHTML={{ __html: post.html }} />
    // </Responsive>
    // <Responsive minWidth={Responsive.onlyComputer.minWidth}>
    //   <BlogPostDesktop post={post} />
    // </Responsive>
    return (
      <Container className={blogPostStyles.markdownContainer}>
        <BlogPostDate post={post} />
        <BlogPostDesktop versionData={versionData} />
      </Container>
    )
  }
}

export default BlogPostBody;
