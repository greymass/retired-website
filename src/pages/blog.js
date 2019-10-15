
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { translate } from 'react-i18next';
import { Grid } from "semantic-ui-react"

import Layout from '../components/layout';
import FeaturedBlogPosts from '../components/shared/sections/featuredBlogPosts';

import BlogPostList from '../components/blog/blogPostList';
import RecentPodcasts from '../components/blog/recentPodcasts';

import blogStyles from './blog.module.css';

class Blog extends Component {
  render() {
    return (
      <Layout shortHeader>
        { () => (
          <div>
            <FeaturedBlogPosts
              title="blog:featured_blog_post_title"
              withFullHeader
            />

            <div className={blogStyles.container}>
              <Grid stackable container>
                <Grid.Column mobile={16} tablet={10} computer={10}>
                  <BlogPostList />
                </Grid.Column>
                <Grid.Column floated="right" mobile={16} tablet={5} computer={5}>
                  <RecentPodcasts />
                </Grid.Column>
              </Grid>
            </div>
          </div>
        )}
      </Layout>
    )
  }
}

export default translate()(Blog);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
