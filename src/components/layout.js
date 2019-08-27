import React, { Component } from "react"
import { css } from "@emotion/core";

import { I18nextProvider } from 'react-i18next';

import i18n from '../utils/i18n';

import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Segment, Button } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import { rhythm } from "../utils/typography";

import LanguageSwitcher from './languageSwitcher';

class Layout extends Component {
  render() {
    const { children, t, i18n: i18nObject } = this.props;

    const cleanedUpLocaleName = i18nObject.language.split('-')[0];

    return (
      <I18nextProvider i18n={i18n}>
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
            {children(cleanedUpLocaleName)}
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
      </I18nextProvider>
    )
  }
}

export default translate('shared')(Layout);
