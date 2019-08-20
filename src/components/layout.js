import React, { Component } from "react"
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Segment, Button } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

import { rhythm } from "../utils/typography";

import LanguageSwitcher from './languageSwitcher';

class Layout extends Component {
  render() {
    const { children, t } = this.props;

    return (
      <Segment
        basic
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Greymass</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Link to={`/`}>
          <h3
            css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
          >
            {t('home')}
          </h3>
        </Link>
        &nbsp;
        |
        &nbsp;
        <Link
          to={`/about/`}
        >
          <h3
            css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
          >
            {t('about')}
          </h3>
        </Link>

        <br />
        <h2>{t('heading')}</h2>
        <Segment
          css={css`
            margin: 50 auto;
            max-width: 700px;
            padding: ${rhythm(10)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          {children}
        </Segment>
        <br />
        <br />
        Semantic UI Example:
        <br />
        <Button
          content="This button is useless!"
        />
        <br />
        <br />
        Switch between Languages:
        <LanguageSwitcher />
      </Segment>
    )
  }
}

export default withTranslation('shared')(Layout);
