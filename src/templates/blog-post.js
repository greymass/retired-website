import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { Container, Icon } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import Layout from '../components/layout';

import FeaturedBlogPosts from '../components/shared/featuredBlogPosts';

import blogPostStyles from './blog-post.module.css'

class BlogPost extends Component {
  render() {
    const { data, t } = this.props;
    const post = data.markdownRemark;

    return (
      <Layout>
        { () => (
          <div className={blogPostStyles.container}>
            <div className={blogPostStyles.headerContainer}>
              <Container>
                <h1 className={blogPostStyles.headerText}>
                  {post.frontmatter.title}
                </h1>
              </Container>
            </div>
            <Container className={blogPostStyles.markdownContainer}>
              <h5 className={blogPostStyles.dateText}>
                <Icon name="calendar alternate" />
                &nbsp;&nbsp;
                {(new Date(post.frontmatter.date)).toLocaleDateString()}
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span className={blogPostStyles.writtenBySpan}>
                  {t('blog_post_entry_written_by', { author: post.frontmatter.author })}
                </span>
              </h5>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
            <FeaturedBlogPosts
              containerClassName="lightBlueBackground"
              link="blog:featured_blog_post_link"
              textClassName="whiteText"
              title="blog:featured_blog_post_header"
            />
          </div>
        )}
      </Layout>
    )
  }
}

export default translate('blog')(BlogPost);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`
