import React, { Component } from 'react';

import { graphql } from 'gatsby';

import FeaturedBlogPosts from '../components/shared/sections/featuredBlogPosts';

import Layout from '../components/layout';

import BlogPostHeader from '../components/blog/blogPost/header';
import BlogPostBody from '../components/blog/blogPost/body';

import blogPostStyles from './blog-post.module.css';
import SEO from '../components/shared/seo';

class BlogPost extends Component {
  render() {
    const { data, pageContext } = this.props;
    const { intl } = pageContext;

    const post = data.markdownRemark;

    console.log({post});

    return (
      <Layout>
        <SEO
          lang={intl.locale}
          keywords={['blog-page', 'greymass']}
          title={post.frontmatter.title}
        />
        <BlogPostHeader post={post}  />
        <div className={blogPostStyles.bodyContainer}>
          <BlogPostBody post={post} />
        </div>
        <div className={blogPostStyles.featuredBlogPostContainer}>
          <FeaturedBlogPosts
            containerClassName="lightBlueBackground"
            inverted
            link="blog:featured_blog_post_link"
            textClassName="whiteText"
            title="blog:featured_blog_post_header"
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPost;

export const query = graphql`
  query($slug: String!, $locale: String!) {
    markdownRemark(fields: { page: { slug: { eq: $slug }, locale: { eq: $locale } } }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`
