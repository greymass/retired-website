
import React, { Component } from 'react';

import { List } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';

import { translate } from 'react-i18next';

class BlogRecentPodcasts extends Component {
  render() {
    const { data, i18n } = this.props;

    console.log({data})

    return (i18n.language === 'en') ? (
      <List>
        {data
          .allDataJson.edges
          .map(({ node }) => (
            <Podcast podcast={node} />
          ))}
      </List>
    ) : '';
  }
}

const BlogRecentPodcastsWrapper = translate()(BlogRecentPodcasts)

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

const Podcast = ({ podcast }) => (
  <a href={podcast.link}>
    <h3>{podcast.title}</h3>
    <h4>{podcast.date}</h4>
  </a>
);

