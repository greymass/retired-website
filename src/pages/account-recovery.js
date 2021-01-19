import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';
import SEO from '../components/shared/seo';

import { Container, Header, Segment } from 'semantic-ui-react';

class AccountRecovery extends React.Component {
  render() {
    const { intl, location } = this.props;

    return (
      <Layout location={location}>
        <SEO
          lang={intl.locale}
          keywords={['account recovery', 'anchor', 'wallet']}
          title="Account Recovery - Anchor Wallet"
        />
        <SharedHeader
          title={intl.formatMessage({ id: 'account_recovery_header_title' })}
          paragraph={intl.formatMessage({ id: 'account_recovery_header_paragraph' })}
        />
        <Container>
          <Segment padded="very" size="large" style={{ margin: '3em 0' }}>
            <Header size="huge" textAlign="center">
              This feature and page are in development.
            </Header>
            <p>As part of our efforts to improve the EOSIO account creation process, we are creating a new account backup standard that will work within Anchor Wallet to securely backup the owner permission for any EOSIO account.</p> 
            <p>For technical information about this encryption method, you are welcome to view the Swift prototype we have built. More information will be available as this feature is developed and released.</p>
            <p>
              <a href="https://github.com/greymass/swift-eosio-key-encryption">
                https://github.com/greymass/swift-eosio-key-encryption
              </a>
            </p>
          </Segment>
        </Container>

      </Layout>
    )
  }
}

export default injectIntl(AccountRecovery);
