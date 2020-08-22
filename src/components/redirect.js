import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "./shared/seo"

const Redirect = () => {
  return <SEO title="Greymass" />
}

export default injectIntl(Redirect)
