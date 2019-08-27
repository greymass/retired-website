import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';

class BlogPost extends Component {
  render() {
    const { data } = this.props;

    const post = data.markdownRemark
    return (
      <Layout>
        { () => (
          <div>
            <h1>{post.frontmatter.title}</h1>
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
