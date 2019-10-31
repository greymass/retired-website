import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
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
      intl,
      inverted,
      link,
      textClassName,
      title,
      withFullHeader
    } = this.props;

    const featuredBlogPosts =
      data.allMarkdownRemark.edges
          .filter(({ node }) => node.fields.page.locale === intl.locale);
    console.log({featuredBlogPosts})

    const featuredBlogPostCards = featuredBlogPosts.slice(0, 5).map(featuredBlogPost => (
      <FeaturedBlogPostsCard
        inverted={inverted}
        linkTo={`/${featuredBlogPost.node.fields.page.locale}/${featuredBlogPost.node.fields.page.path}`}
        text={featuredBlogPost.node.frontmatter.title}
      />
    ))

    return (
      <div className={featuredBlogPostsStyles.topContainer}>
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
                  {featuredBlogPostCards}
                </Grid.Row>
              )}
              title={title}
            />
          ) : (
            <React.Fragment>
              <h4 className={
                `${featuredBlogPostsStyles.headerText} ${featuredBlogPostsStyles[textClassName]}`
              }>
                {title}
              </h4>
              <Grid centered>
                {featuredBlogPostCards}
              </Grid>
            </React.Fragment>
          )}
          {link && (
            <div className={featuredBlogPostsStyles.linkContainer}>
              <Link
                className={
                  `${featuredBlogPostsStyles.supportUsLink} ${featuredBlogPostsStyles[textClassName]}`
                }
                to={`${intl.locale}/blog`}
              >
                {link}
                <Icon name="arrow right" style={{ marginLeft: '5px'}} />
              </Link>
            </div>
          )}
        </Container>
      </div>
    )
  }
}

const FeaturedBlogPostsWrapper = injectIntl(FeaturedBlogPosts);

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
