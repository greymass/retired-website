import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { injectIntl } from "gatsby-plugin-intl"

import datetStyles from './date.module.css'

class BlogPostBodyDate extends Component {
  render() {
    const {
      post,
    } = this.props;

    return (
      <h5 className={datetStyles.dateText}>
        <Icon name="calendar alternate" />
        &nbsp;&nbsp;
        {(new Date(post.frontmatter.date)).toLocaleDateString()}
        {post.frontmatter.author && (
          <React.Fragment>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span className={datetStyles.writtenBySpan}>
              Written by {post.frontmatter.author}
            </span>
          </React.Fragment>
        )}
      </h5>
    )
  }
}

export default injectIntl(BlogPostBodyDate);
