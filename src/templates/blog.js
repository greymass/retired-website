import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Grid } from "semantic-ui-react"
import { injectIntl } from "gatsby-plugin-intl";

import Layout from '../components/layout';
import BlogPostList from '../components/blog/blogPostList';
import RecentPodcasts from '../components/blog/recentPodcasts';
import SharedHeader from '../components/shared/sections/header';

import blogStyles from './blog.module.css';

class Blog extends Component {
  render() {
    const { data, intl, location, pageResources } = this.props;
    const { pageNumber, totalNumberOfPages } = pageResources.json.pageContext;

    return (
      <Layout location={location}>
        <SharedHeader
          title={intl.formatMessage({ id: 'blog_featured_blog_post_title' })}
        />
        <div className={blogStyles.container}>
          <Grid stackable container>
            <Grid.Column mobile={16} tablet={11} computer={11}>
              <BlogPostList
                data={data}
                pageNumber={pageNumber}
                totalNumberOfPages={totalNumberOfPages}
              />
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

export default injectIntl(Blog);

export const query = graphql`
  query($language: String!, $resultsToSkip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/(blog)/"}, fields: { page: { locale: { eq: $language } } } },
      limit: 10,
      skip: $resultsToSkip,
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
