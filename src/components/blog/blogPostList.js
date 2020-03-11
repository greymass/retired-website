import React, { Component } from 'react';
import { Header, List, Pagination } from 'semantic-ui-react';
import { injectIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby'

import BlogPostListItem from './blogPostList/item';
import blogPostListStyles from './blogPostList.module.css';

class BlogPostList extends Component {
  handlePaginationChange = (e, { activePage }) => {
    const { intl } = this.props;

    navigate(`/${intl.locale}/blog/${activePage}`);
  }
  render() {
    const {
      data,
      intl,
      pageNumber,
      totalNumberOfPages
    } = this.props;

    return (
      <div className={blogPostListStyles.container}>
        <Header
          as="h3"
          content={intl.formatMessage({ id: 'blog_blog_post_list_title' })}
          className={blogPostListStyles.headerText}
        />
      
        <List className={blogPostListStyles.list}>
          {data
            .allMarkdownRemark.edges
            .map(({ node }) => (
              <BlogPostListItem blogPost={node} />
            ))}
        </List>

        <Pagination
          defaultActivePage={pageNumber}
          firstItem={null}
          lastItem={null}
          onPageChange={this.handlePaginationChange}
          totalPages={totalNumberOfPages}
        />
      </div>
    );
  }
}

export default injectIntl(BlogPostList);
