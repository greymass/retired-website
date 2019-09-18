
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { translate } from 'react-i18next';
import { Grid } from 'semantic-ui-react';

import Layout from '../components/layout';
import FeaturedBlogPosts from '../components/shared/featuredBlogPosts';

import BlogPostList from '../components/blog/BlogPostList';
import RecentPodcasts from '../components/blog/RecentPodcasts';

class Blog extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <FeaturedBlogPosts primary title="home:blog_posts_title" />

            <Grid stackable>
              <Grid.Column>
                <BlogPostList />
              </Grid.Column>
              <Grid.Column>
                <RecentPodcasts />
              </Grid.Column>
            </Grid>
          </div>
        )}
      </Layout>
    )
  }
}

export default translate('blog')(Blog);

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
