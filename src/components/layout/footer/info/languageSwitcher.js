import React, { Component } from 'react'
import { translate } from 'react-i18next'
import { Dropdown, Menu } from "semantic-ui-react"
import { navigate } from 'gatsby'

class FooterInfoLanguageSwitcher extends Component {
  constructor(props) {
    super(props)

    const { i18n } = this.props;

    this.state = { language: i18n.language }
  }

  handleLanguageChange = (e, data) => {
    const { i18n } = this.props;
    const path = window.location.href;
    const newLanguage = data.value;

    i18n.changeLanguage(newLanguage)

    // Handle switching between blog posts
    if (path.includes('blog')) {
      const blogSlug = path.split('blog/')[1]
      navigate(`${newLanguage}/blog/${blogSlug}`);
    }
  }

  render() {
    const { i18n, t } = this.props;

    const languageOptions = [
      { key: "en", text: t('shared:english'), value: "en" },
      { key: "fr", text: t('shared:french'), value: "fr" },
    ]

    return (
      <Menu compact>
        <Dropdown
          item
          onChange={this.handleLanguageChange}
          options={languageOptions}
          simple
          value={i18n.language}
        />
      </Menu>
    )
  }
}

export default translate('layout')(FooterInfoLanguageSwitcher);
