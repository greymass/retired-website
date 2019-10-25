
import React, { Component } from 'react';

import { Header, Icon, List } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';



import recentPodcastsStyles from './recentPodcasts.module.css';

class BlogRecentPodcasts extends Component {
  render() {
    const { data } = this.props;

    // const cleanedUpLocaleName = i18n.language.split('-')[0];
    const cleanedUpLocaleName = 'en';

    return (cleanedUpLocaleName === 'en') ? (
      <div className={recentPodcastsStyles.container}>
        <Header
          as="h3"
          className={recentPodcastsStyles.header}
          content={'recent_podcasts_header'}
        />
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
          {'recent_podcasts_link'}
          <Icon name="arrow right" className={recentPodcastsStyles.linkIcon} />
        </a>
      </div>
    ) : '';
  }
}

const BlogRecentPodcastsWrapper = BlogRecentPodcasts

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
