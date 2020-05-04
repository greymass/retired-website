import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import { graphql } from 'gatsby';
import { Container } from 'semantic-ui-react';

import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';

import SharedListItemsPodcast from '../components/shared/list/items/podcast';

import podcastStyles from './podcasts.module.css';
import SEO from '../components/shared/seo';

class Projects extends Component {
  render() {
    const { data, intl, location } = this.props;
    const podcasts = data.podcasts.edges.map(({ node }) => node);

    return (
      <Layout location={location}>
        <SEO
          lang={intl.locale}
          keywords={['podcasts', 'greymass']}
          title="Podcasts"
        />
        <SharedHeader
          title={intl.formatMessage({ id: 'podcasts_header_title' })}
          paragraph={intl.formatMessage({ id: 'podcasts_header_paragraph' })}
        />
        <div className={podcastStyles.container}>
          <Container>
            {podcasts.map((podcast) => (
              <SharedListItemsPodcast
                title={intl.formatMessage({ id: `podcast_${podcast.key}_title` })}
                date={podcast.date}
                link={podcast.link}
              />
            ))}
          </Container>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Projects);

export const query = graphql`
  query {
    podcasts: allPodcastsJson(limit: 100, sort: {fields: date, order: DESC}) {
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
`
