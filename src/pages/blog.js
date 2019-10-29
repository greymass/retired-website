
import React, { Component } from 'react';
import { graphql } from 'gatsby';


import { Grid } from "semantic-ui-react"

import Layout from '../components/layout';
import FeaturedBlogPosts from '../components/shared/sections/featuredBlogPosts';

import BlogPostList from '../components/blog/blogPostList';
import RecentPodcasts from '../components/blog/recentPodcasts';

import blogStyles from './blog.module.css';

class Blog extends Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <FeaturedBlogPosts
          paragraph="blog:featured_blog_post_paragraph"
          title="blog:featured_blog_post_title"
          withFullHeader
        />

        <div className={blogStyles.container}>
          <Grid stackable container>
            <Grid.Column mobile={16} tablet={10} computer={10}>
              <BlogPostList data={data} />
            </Grid.Column>
            <Grid.Column floated="right" mobile={16} tablet={5} computer={5}>
              <RecentPodcasts />
            </Grid.Column>
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default Blog;

export const query = graphql`
  query($language: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/(blog)/"}, fields: { page: { locale: { eq: $language } } } },
      limit: 100
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            page {
              locale
              path
            }
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
