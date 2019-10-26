import React, { Component, createRef } from 'react';

import { graphql } from 'gatsby';

import FeaturedBlogPosts from '../components/shared/sections/featuredBlogPosts';

import Layout from '../components/layout';

import BlogPostHeader from '../components/blog/blogPost/header';
import BlogPostBody from '../components/blog/blogPost/body';

import blogPostStyles from './blog-post.module.css'

class BlogPost extends Component {
  contextRef = createRef();

  render() {
    const { data } = this.props;
    const post = data.markdownRemark;

    console.log({data});

    return (
      <Layout>
        <div>
          <BlogPostHeader post={post} />
          <div className={blogPostStyles.bodyContainer}>
            <BlogPostBody post={post} />
          </div>
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
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`
