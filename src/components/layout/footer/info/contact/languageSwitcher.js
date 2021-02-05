import React, { Component } from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Dropdown, Menu } from 'semantic-ui-react';

import { navigate } from 'gatsby';

class FooterInfoLanguageSwitcher extends Component {
  handleLanguageChange = (e, data) => {
    const { intl } = this.props;
    const path = window.location.pathname + window.location.search;
    const newLanguage = data.value;

    navigate(path.replace(`/${intl.locale}/`, `/${newLanguage}/`));
  }

  render() {
    const { intl } = this.props;

    const languageOptions = [
      { key: "en", text: 'english', value: "en" },
      // { key: "fr", text: 'français', value: "fr" },
    ];

    const location = this.props.location || (typeof window !== 'undefined' && window.location);

    const path = location && location.pathname;

    const onBlogPage = path && path.includes('blog');

    return (onBlogPage) ? '' : (
      <Menu compact>
        <Dropdown
          item
          onChange={this.handleLanguageChange}
          options={languageOptions}
          simple
          value={intl.locale}
        />
      </Menu>
    )
  }
}

export default injectIntl(FooterInfoLanguageSwitcher);
