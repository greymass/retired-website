
import React, { Component } from 'react';

import { List } from 'semantic-ui-react';

import BlogPostListItem from './blogPostList/item';
import { graphql, StaticQuery } from "gatsby"

class BlogPostList extends Component {
  render() {
    const { data, i18n } = this.props;

    return (
      <List>
        {data
          .allMarkdownRemark.edges
          .filter( ({ node }) => node.fields.slug.includes(`${i18n.language}/`))
          .map(({ node }) => (
            <BlogPostListItem blogPost={node} />
          ))}
      </List>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <BlogPostList data={data} {...props} />}
  />
);

