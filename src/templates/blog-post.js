import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import blogPostStyles from './blog-post.module.css'

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
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
