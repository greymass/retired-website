import React, { Component } from 'react'
import { Dropdown, Menu } from "semantic-ui-react"
// import { navigate } from 'gatsby'

class FooterInfoLanguageSwitcher extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   const { i18n } = this.props;
  //
  //   this.state = { language: i18n.language }
  // }

  handleLanguageChange = (e, data) => {
    // const { i18n } = this.props;
    // const path = window.location.href;
    // const newLanguage = data.value;
    //
    // i18n.changeLanguage(newLanguage)
    //
    // // Handle switching between blog posts
    // if (path.includes('blog')) {
    //   const blogSlug = path.split('blog/')[1]
    //   navigate(`${newLanguage}/blog/${blogSlug}`);
    // }
  }

  render() {
    // const cleanedUpLocaleName = i18n.language.split('-')[0];
    const cleanedUpLocaleName = 'en';

    const languageOptions = [
      { key: "en", text: 'english', value: "en" },
      { key: "fr", text: 'français', value: "fr" },
    ]

    return (
      <Menu compact>
        <Dropdown
          item
          onChange={this.handleLanguageChange}
          options={languageOptions}
          simple
          value={cleanedUpLocaleName}
        />
      </Menu>
    )
  }
}

export default FooterInfoLanguageSwitcher;
