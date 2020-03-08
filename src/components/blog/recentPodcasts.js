import React, { Component } from 'react';
import { Header, Icon, Image, List } from 'semantic-ui-react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import SharedListItemsPodcast from '../shared/list/items/podcast';

import podcastLogo from '../../images/podcast.jpg'
import recentPodcastsStyles from './recentPodcasts.module.css';

class BlogRecentPodcasts extends Component {
  render() {
    const { data, intl } = this.props;

    return (
      <div className={recentPodcastsStyles.container}>
        <Image rounded src={podcastLogo} />
        <Header
          as="h3"
          className={recentPodcastsStyles.header}
          content={intl.formatMessage({ id: 'blog_recent_podcasts_header' })}
        />
        <List>
          {data.podcasts.edges.map(({ node: podcast }) => (
            <SharedListItemsPodcast
              title={intl.formatMessage({ id: `podcast_${podcast.key}_title` })}
              date={podcast.date}
              link={podcast.link}
            />
          ))}
        </List>
        <Link to={`/${intl.locale}/podcasts`} className={recentPodcastsStyles.link}>
          {intl.formatMessage({ id: 'blog_recent_podcasts_link' })}
          <Icon name="arrow right" className={recentPodcastsStyles.linkIcon} />
        </Link>
      </div>
    );
  }
}

const BlogRecentPodcastsWrapper = injectIntl(BlogRecentPodcasts)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        podcasts: allPodcastsJson(limit: 20, sort: {fields: date, order: DESC}) {
          edges {
            node {
              key
              date
              link
              language
            }
          }
        }
      }
    `}
    render={data => <BlogRecentPodcastsWrapper data={data} {...props} />}
  />
);
