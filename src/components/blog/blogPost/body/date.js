import React, { Component } from 'react';

import { translate } from 'react-i18next';
import { Icon } from 'semantic-ui-react';

import datetStyles from './date.module.css'

class BlogPostBodyDate extends Component {
  render() {
    const { post, t } = this.props;

    return (
      <h5 className={datetStyles.dateText}>
        <Icon name="calendar alternate" />
        &nbsp;&nbsp;
        {(new Date(post.frontmatter.date)).toLocaleDateString()}
        {post.frontmatter.author && (
          <React.Fragment>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span className={datetStyles.writtenBySpan}>
                {t('blog_post_entry_written_by', { author: post.frontmatter.author })}
              </span>
          </React.Fragment>
        )}
      </h5>
    )
  }
}

export default translate('blog')(BlogPostBodyDate)

