import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { Container } from 'semantic-ui-react';

import Layout from '../components/layout';

import blogPostStyles from './blog-post.module.css'

import FeaturedBlogPosts from '../components/shared/featuredBlogPosts';

class BlogPost extends Component {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;

    return (
      <Layout>
        { () => (
          <div className={blogPostStyles.container}>
            <div className={blogPostStyles.headerContainer}>
              <h1 className={blogPostStyles.headerText}>{post.frontmatter.title}</h1>
            </div>
            <Container className={blogPostStyles.markdownContainer}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
            <FeaturedBlogPosts
              containerClassName="lightBlueBackground"
              link="blog:featured_blog_post_link"
              textClassName="whiteText"
              title="blog:featured_blog_post_header"
            />
          </div>
        )}
      </Layout>
    )
  }
}

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
