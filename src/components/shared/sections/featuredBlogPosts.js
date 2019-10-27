import React, { Component } from "react"

import { Icon, Grid, Container } from 'semantic-ui-react';

import { graphql, Link, StaticQuery } from 'gatsby';

import FeaturedBlogPostsCard from './featuredBlogPosts/card';
import Header from './header';

import featuredBlogPostsStyles from './featuredBlogPosts.module.css';

class FeaturedBlogPosts extends Component {
  render() {
    const {
      containerClassName,
      data,
      inverted,
      link,
      textClassName,
      title,
      withFullHeader
    } = this.props;

    // const cleanedUpLocaleName = i18n.language.split('-')[0];
    const cleanedUpLocaleName = 'en';

    console.log({edges: data.allMarkdownRemark.edges})
    const featuredBlogPosts =
      data.allMarkdownRemark.edges
          .filter(({ node }) => node.fields.page.locale === cleanedUpLocaleName);
    console.log({featuredBlogPosts})

    return (
        <Container
          className={
            `${featuredBlogPostsStyles.container} ${
              containerClassName ? featuredBlogPostsStyles[containerClassName] : ''
            }`
          }
        >
          {withFullHeader ? (
            <Header
              extraRow={(
                <Grid.Row className={featuredBlogPostsStyles.gridComponent} centered>
                  {featuredBlogPosts.slice(0, 5).map(featuredBlogPost => (
                    <FeaturedBlogPostsCard
                      inverted={inverted}
                      linkTo={featuredBlogPost.node.fields.page.path}
                      text={featuredBlogPost.node.frontmatter.title}
                    />
                  ))}
                </Grid.Row>
              )}
              title={title}
            />
          ) : (
            <h4 className={
            `${featuredBlogPostsStyles.headerText} ${featuredBlogPostsStyles[textClassName]}`
            }>
              {title}
            </h4>
          )}
          {link && (
            <div className={featuredBlogPostsStyles.linkContainer}>
              <Link
                className={
                `${featuredBlogPostsStyles.supportUsLink} ${featuredBlogPostsStyles[textClassName]}`
                }
                to={`/blog`}
              >
                {link}
                <Icon name="arrow right" style={{ marginLeft: '5px'}} />
              </Link>
            </div>
          )}
        </Container>
    )
  }
}

const FeaturedBlogPostsWrapper = FeaturedBlogPosts;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC},
          filter: {fileAbsolutePath: {regex: "/(blog)/"}},
          limit: 100
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                page {
                  locale
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => <FeaturedBlogPostsWrapper data={data} {...props} />}
  />
);
