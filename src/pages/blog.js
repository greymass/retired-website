
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { translate } from 'react-i18next';
import { Grid } from 'semantic-ui-react';

import Layout from '../components/layout';
import FeaturedBlogPosts from '../components/shared/featuredBlogPosts';

import BlogPostList from '../components/blog/blogPostList';
import RecentPodcasts from '../components/blog/recentPodcasts';

class Blog extends Component {
  render() {
    return (
      <Layout backgroundColor="white">
        { () => (
          <div>
            <FeaturedBlogPosts primary title="blog:featured_blog_post_title" />

            <Grid stackable container>
              <Grid.Column width={10}>
                <BlogPostList />
              </Grid.Column>
              <Grid.Column />
              <Grid.Column width={5}>
                <RecentPodcasts />
              </Grid.Column>
            </Grid>
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
