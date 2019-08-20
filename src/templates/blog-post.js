import React, { Component, lazy, Suspense } from "react"
import { graphql } from "gatsby"
const Layout = lazy(() => import('../components/layout'));

class BlogPost extends Component {
  render() {
    const { data } = this.props;

    const post = data.markdownRemark
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Layout>
      </Suspense>
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
