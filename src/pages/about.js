import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    { () => (
      <React.Fragment>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
          We are Greymass!
        </p>
      </React.Fragment>
    )}
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
