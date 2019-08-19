import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Segment, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { rhythm } from "../utils/typography";

import LanguageSwitcher from './languageSwitcher';

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const { t, i18n, ready } = useTranslation('shared', { useSuspense: false });
  console.log({i18n: i18n.language})

  return (
    <Segment
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Button
        content="test"
      />
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Home
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        {t('heading')}
      </Link>
      {children}
    </Segment>
  )
}

export default Layout;
