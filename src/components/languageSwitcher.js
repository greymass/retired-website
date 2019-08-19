import React, { Component } from "react"
import classNames from "classnames"
import { useTranslation } from "react-i18next"

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = useTranslation('shared', { useSuspense: false });

    this.state = { language: i18n && i18n.language }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  handleChangeLanguage(lng) {
    const { i18n } = useTranslation('shared', { useSuspense: false });

    i18n.changeLanguage(lng)
  }

  renderLanguageChoice({ code, label }) {
    const buttonClass = classNames("LanguageSwitcher__button", {
      "LanguageSwitcher__button--selected": this.state.language === code,
    })

    return (
      <button
        key={code}
        className={buttonClass}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    )
  }

  render() {
    const languages = [
      { code: "en", label: "English" },
      { code: "fr", label: "French" },
    ]

    return (
      <div className="LanguageSwitcher">
        {languages.map(language => this.renderLanguageChoice(language))}
      </div>
    )
  }
}

export default LanguageSwitcher;
