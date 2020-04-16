/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon from '../../images/favicon.ico';

function SEO({
  author,
  description,
  image,
  keywords,
  lang,
  meta,
  title,
  url,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description
  const renderedTitle = (title)
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          "rel": "icon",
          "type": "image/png",
          "href": favicon
        }
      ]}
      title={renderedTitle}
      meta={[
        {
          name: 'description',
          content: description || metaDescription,
        },
        {
          property: 'og:description',
          content: description || metaDescription,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:title',
          content: renderedTitle,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: renderedTitle,
        },
        {
          name: 'twitter:url',
          content: url,
        },
        {
          name: 'twitter:description',
          content: description || metaDescription,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: '',
  image: '',
  keywords: [],
  lang: 'en',
  meta: [],
  title: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
