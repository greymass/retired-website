import React, { Component } from 'react';

import { graphql } from 'gatsby';

import { Container, Header } from "semantic-ui-react"

import Layout from '../components/layout';
import SEO from '../components/shared/seo';

import resourceStyles from './resource.module.css';

class Resource extends Component {
  render() {
    const { data, pageContext } = this.props;
    const { intl } = pageContext;

    const resource = data.markdownRemark;

    return (
      <Layout>
        <SEO
          lang={intl.locale}
          keywords={['blog', 'greymass']}
          title={resource.frontmatter.title}
        />
        <div>
          <div className={resourceStyles.headerContainer}>
            <Container>
              <Header
                as="h1"
                className={resourceStyles.headerText}
                content={resource.frontmatter.title}
                size="huge"
              />
            </Container>
          </div>
          <div className={resourceStyles.bodyContainer}>
            <Container>
              <div dangerouslySetInnerHTML={{ __html: resource.html }} />
            </Container>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Resource;

export const query = graphql`
  query($slug: String!, $locale: String!) {
    markdownRemark(fields: { page: { slug: { eq: $slug }, locale: { eq: $locale } } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
