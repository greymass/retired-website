import React, { Component } from 'react';
import { Header, Icon, Image, List } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import podcastLogo from '../../images/podcast.jpg'
import recentPodcastsStyles from './recentPodcasts.module.css';

class BlogRecentPodcasts extends Component {
  render() {
    const { data, intl } = this.props;

    return (intl.locale === 'en') ? (
      <div className={recentPodcastsStyles.container}>
        <Image rounded src={podcastLogo} />
        <Header
          as="h3"
          className={recentPodcastsStyles.header}
          content={intl.formatMessage({ id: 'blog_recent_podcasts_header' })}
        />
        <List>
          {data
            .podcasts.edges
            .map(({ node: podcast }) => {
              return (
                <Podcast podcast={podcast} />
              )
            })}
        </List>
        <a href="/#podcasts" className={recentPodcastsStyles.link}>
          {intl.formatMessage({ id: 'blog_recent_podcasts_link' })}
          <Icon name="arrow right" className={recentPodcastsStyles.linkIcon} />
        </a>
      </div>
    ) : '';
  }
}

const BlogRecentPodcastsWrapper = injectIntl(BlogRecentPodcasts)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        podcasts: allPodcastsJson(limit: 20) {
          edges {
            node {
              title
              description
              date
              link
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
