import React from "react"
import { graphql } from "gatsby"
import { translate } from 'react-i18next';

import Layout from '../components/layout';

class About extends React.Component {
  render() {
    const {
      data,
      t
    } = this.props;
    return (
      <Layout>
        { () => (
          <React.Fragment>
            <p>Foo: {t('foo')}</p>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
              We are Greymass!
            </p>
          </React.Fragment>
        )}
      </Layout>
    )
  }
}

export default translate('about')(About);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
