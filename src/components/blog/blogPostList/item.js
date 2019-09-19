import React, { Component } from 'react';

import { Link } from 'gatsby';

class BlogPostListItem extends Component {
  render() {
    const { blogPost } = this.props;

    return (
      <div key={blogPost.id}>
        <Link
          to={blogPost.fields.slug}
        >
          <h3>
            {blogPost.frontmatter.title}{" "}
            <span>
              {blogPost.frontmatter.date}
            </span>
          </h3>
          <p>{blogPost.excerpt}</p>
        </Link>
      </div>
    );
  }
}

export default BlogPostListItem;
