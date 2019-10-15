import React, { Component } from 'react';

import { Link } from 'gatsby';

import blogPostItemStyles from './item.module.css';

class BlogPostListItem extends Component {
  render() {
    const { blogPost } = this.props;

    return (
      <div key={blogPost.id} className={blogPostItemStyles.container}>
        <Link
          to={blogPost.fields.slug}
        >
          <h3 className={blogPostItemStyles.headerText}>
            {blogPost.frontmatter.title}
          </h3>
          <p className={blogPostItemStyles.descriptionText}>
            {blogPost.excerpt}
          </p>
          <h5 className={blogPostItemStyles.dateText}>
            {(new Date(blogPost.frontmatter.date)).toLocaleDateString()}
          </h5>
        </Link>
      </div>
    );
  }
}

export default BlogPostListItem;
