import React, { Component } from 'react';

import { graphql } from 'gatsby';

import { injectIntl } from 'gatsby-plugin-intl';

import FeaturedBlogPosts from '../components/shared/sections/featuredBlogPosts';

import Layout from '../components/layout';

import BlogPostHeader from '../components/blog/blogPost/header';
import BlogPostBody from '../components/blog/blogPost/body';

import blogPostStyles from './blog-post.module.css';
import SEO from '../components/shared/seo';

class BlogPost extends Component {
  render() {
    const { data, intl } = this.props;

    const post = data.markdownRemark;

    return (
      <Layout>
        <SEO
          description={post.frontmatter.description}
          image={post.frontmatter.image}
          keywords={['blog-page', 'greymass']}
          lang={intl.locale}
          title={post.frontmatter.title}
          url={`https://greymass.com${this.props.path}`}
        />
        <BlogPostHeader post={post}  />
        <div className={blogPostStyles.bodyContainer}>
          <BlogPostBody post={post} />
        </div>
        <div className={blogPostStyles.featuredBlogPostContainer}>
          <FeaturedBlogPosts
            inverted
            link={intl.formatMessage({ id: 'blog_featured_blog_post_link' })}
            textClassName="whiteText"
            title={intl.formatMessage({ id: 'blog_featured_blog_post_header' })}
          />
        </div>
      </Layout>
    )
  }
}

export default injectIntl(BlogPost);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    markdownRemark(fields: { page: { slug: { eq: $slug }, locale: { eq: $locale } } }) {
      html
      frontmatter {
        author
        date
        title
        image
        description
      }
    }
  }
`
