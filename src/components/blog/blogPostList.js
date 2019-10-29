
import React, { Component } from 'react';

import { Header, List } from 'semantic-ui-react';

import { injectIntl } from 'gatsby-plugin-intl';

import BlogPostListItem from './blogPostList/item';

import blogPostListStyles from './blogPostList.module.css';

class BlogPostList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className={blogPostListStyles.container}>
        <Header
          as="h3"
          content={'blog_post_list_title'}
          className={blogPostListStyles.headerText}
        />
        <List className={blogPostListStyles.list}>
          {data
            .allMarkdownRemark.edges
            .map(({ node }) => (
              <BlogPostListItem blogPost={node} />
            ))}
        </List>
      </div>
    );
  }
}

export default injectIntl(BlogPostList);
