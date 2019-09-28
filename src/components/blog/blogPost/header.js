import React, { Component } from "react"

import { Container } from 'semantic-ui-react';

import headerStyles from './header.module.css';

class BlogPostHeader extends Component {
  render() {
    const { post } = this.props;
    return(
      <div className={headerStyles.headerContainer}>
        <Container>
          <h1 className={headerStyles.headerText}>
            {post.frontmatter.title}
          </h1>
        </Container>
      </div>
    );
  }
}

export default BlogPostHeader;

