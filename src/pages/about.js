import React, { lazy, Suspense } from "react"
import { graphql } from "gatsby"

const Layout = lazy(() => import('../components/layout'));

export default ({ data }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  </Suspense>
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
