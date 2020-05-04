import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import Layout from '../components/layout';
import HomeHeader from '../components/home/header';
import HomeProjects from '../components/home/projects';
import HomeAbout from '../components/home/about';
import FeaturedBlogPosts from '../components/shared/sections/featuredBlogPosts';
import HomeNewsletter from '../components/home/newsletter';
import SEO from '../components/shared/seo';

import homeStyles from './index.module.css';
import { graphql } from "gatsby"

class Index extends Component {
  render() {
    const { intl, location, data } = this.props;

    return (
      <Layout location={location} >
        <SEO
          lang={intl.locale}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <HomeHeader />
        <HomeProjects />
        <HomeAbout />
        <div className={homeStyles.bottomContainer}>
          {(data.site.siteMetadata.localesWithBlog.includes(intl.locale)) && (
            <FeaturedBlogPosts
              link={intl.formatMessage({ id: 'blog_featured_blog_post_link' })}
              title={intl.formatMessage({ id: 'blog_featured_blog_post_title' })}
            />
          )}
          <HomeNewsletter />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        localesWithBlog
      }
    }
  }`;


export default injectIntl(Index);
