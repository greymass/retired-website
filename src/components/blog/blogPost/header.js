import React, { Component } from "react"

import { Container, Header } from 'semantic-ui-react';

import headerStyles from './header.module.css';

class BlogPostHeader extends Component {
  render() {
    const { post } = this.props;
    return(
      <div className={headerStyles.headerContainer}>
        <Container>
          <Header
            as="h1"
            className={headerStyles.headerText}
            content={post.frontmatter.title}
            size="huge"
          />
        </Container>
      </div>
    );
  }
}

export default BlogPostHeader;
