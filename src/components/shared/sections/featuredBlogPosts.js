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

    const featuredBlogPosts =
      data.allMarkdownRemark.edges
          .filter(({ node }) => node.fields.slug.includes(`${cleanedUpLocaleName}/`));

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
                      linkTo={featuredBlogPost.node.fields.slug}
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <FeaturedBlogPostsWrapper data={data} {...props} />}
  />
);
