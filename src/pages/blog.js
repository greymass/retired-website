
import React, { Component } from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";

import { translate } from 'react-i18next';

import { rhythm } from "../utils/typography";
import Layout from '../components/layout';

class Blog extends Component {
  render() {
    const { data, i18n, t } = this.props;

    return (
      <Layout>
        { () => (
          <React.Fragment>
            <h4>{t('posts')}</h4>
            {data
              .allMarkdownRemark.edges
              .filter( ({ node }) => node.fields.slug.includes(`${i18n.language}/`))
              .map(({ node }) => (
                <div key={node.id}>
                  <Link
                    to={node.fields.slug}
                    css={css`
                            text-decoration: none;
                            color: inherit;
                          `}
                  >
                    <h3
                      css={css`
                              margin-bottom: ${rhythm(1 / 4)};
                            `}
                    >
                      {node.frontmatter.title}{" "}
                      <span
                        css={css`
                                color: #bbb;
                              `}
                      >
                          — {node.frontmatter.date}
                          </span>
                    </h3>
                    <p>{node.excerpt}</p>
                  </Link>
                </div>
              ))}
            </React.Fragment>
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
`

