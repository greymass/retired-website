
import React, { Component } from 'react';

import { Header, List } from "semantic-ui-react"
import { graphql, StaticQuery } from 'gatsby';


import BlogPostListItem from './blogPostList/item';

import blogPostListStyles from './blogPostList.module.css';

class BlogPostList extends Component {
  render() {
    const { data } = this.props;

    // const cleanedUpLocaleName = i18n.language.split('-')[0];
    const cleanedUpLocaleName = 'en';

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
            .filter( ({ node }) => node.fields.slug.includes(`${cleanedUpLocaleName}/`))
            .map(({ node }) => (
              <BlogPostListItem blogPost={node} />
            ))}
        </List>
      </div>
    );
  }
}

const BlogPostListWrapper = BlogPostList;

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
              # fields {
              #   slug
              # }
              excerpt(pruneLength: 280)
            }
          }
        }
      }
    `}
    render={data => <BlogPostListWrapper data={data} {...props} />}
  />
);
