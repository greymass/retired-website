
import React, { Component } from 'react';

import { Icon, List } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';

import { translate } from 'react-i18next';

import recentPodcastsStyles from './recentPodcasts.module.css';

class BlogRecentPodcasts extends Component {
  render() {
    const { data, i18n, t } = this.props;

    const cleanedUpLocaleName = i18n.language.split('-')[0];

    return (cleanedUpLocaleName === 'en') ? (
      <div className={recentPodcastsStyles.container}>
        <h3 className={recentPodcastsStyles.header}>
          {t('recent_podcasts_header')}
        </h3>
        <List>
          {data
            .allDataJson.edges[0].node.podcasts
            .map((podcast) => {
              return (
                <Podcast podcast={podcast} />
              )
            })}
        </List>

        <a href="/#podcasts" className={recentPodcastsStyles.link}>
          {t('recent_podcasts_link')}
          <Icon name="arrow right" className={recentPodcastsStyles.linkIcon} />
        </a>
      </div>
    ) : '';
  }
}

const BlogRecentPodcastsWrapper = translate('blog')(BlogRecentPodcasts)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: {podcasts: {elemMatch: {title: {ne: null}}}}) {
          edges {
            node {
              podcasts {
                title
                description
                date
                link
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRecentPodcastsWrapper data={data} {...props} />}
  />
);

const Podcast = ({ podcast }) => {
  return (
    <a href={podcast.link}>
      <div className={recentPodcastsStyles.podcastContainer}>
        <h3 className={recentPodcastsStyles.podcastHeader}>
          {podcast.title}
        </h3>
        <h4 className={recentPodcastsStyles.podcastDate}>
          <Icon name="calendar alternate outline" />
          {(new Date(podcast.date).toLocaleDateString())}
        </h4>
      </div>
    </a>
  );
}

