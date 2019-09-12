import React, { Component } from "react"

import { Icon, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';
import { Link } from 'gatsby';

import HomeBlogPostsCard from './blogPosts/card';

import homeBlogPostsStyles from './blogPosts.module.css';

class HomeBlogPosts extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className={homeBlogPostsStyles.container}>
        <h4 className={homeBlogPostsStyles.headerText}>
          {t('blog_posts_title')}
        </h4>

        <Grid stackable centered padded>
          <HomeBlogPostsCard
            linkTo={`blog_posts_primary`}
            primary
            text={t('blog_posts_primary')}
          />
          <HomeBlogPostsCard
            linkTo={`blog_posts_one`}
            text={t('blog_posts_one')}
          />
          <HomeBlogPostsCard
            linkTo={`blog_posts_two`}
            text={t('blog_posts_two')}
          />
          <HomeBlogPostsCard
            linkTo={`blog_posts_three`}
            text={t('blog_posts_three')}
          />
        </Grid>
        <div style={{ padding: '60px', paddingBottom: '70px' }}>
          <Link className={homeBlogPostsStyles.supportUsLink} to={`projects`}>
            {t('blog_posts_link')}
            <Icon name="arrow right" style={{ marginLeft: '5px'}} />
          </Link>
        </div>
      </div>
    )
  }
}

export default translate('home')(HomeBlogPosts);
