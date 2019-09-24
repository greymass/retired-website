
import React, { Component } from 'react';

import { List } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { translate } from 'react-i18next';

import BlogPostListItem from './blogPostList/item';

import blogPostListStyles from './blogPostList.module.css';

class BlogPostList extends Component {
  render() {
    const { data, i18n, t } = this.props;

    const cleanedUpLocaleName = i18n.language.split('-')[0];

    return (
      <div className={blogPostListStyles.container}>
        <h3 className={blogPostListStyles.headerText}>
          {t('blog_post_list_title')}
        </h3>
        <List className={blogPostListStyles.list}>
          {data
            .allMarkdownRemark.edges
            .filter( ({ node }) => node.fields.slug.includes(`${cleanedUpLocaleName}/`))
            .map(({ node }) => (
              <BlogPostListItem blogPost={node} />
            ))}
        </List>
      </div>
    );
  }
}

const BlogPostListWrapper = translate('blog')(BlogPostList);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <BlogPostListWrapper data={data} {...props} />}
  />
);

