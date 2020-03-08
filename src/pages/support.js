import React, { Component } from 'react';

import { injectIntl } from 'gatsby-plugin-intl';
import { Container, Segment } from "semantic-ui-react"

import Layout from '../components/layout';
import TransactionHandlersVoteproducer from '../components/support/transactionHandlers/voteProducer';
import SharedHeader from '../components/shared/sections/header';

import supportStyles from './support.module.css';

class Index extends Component {
  render() {
    const { location, intl } = this.props;

    return (
      <Layout location={location}>
        <SharedHeader
          title={intl.formatMessage({ id: 'support_header' })}
          paragraph={intl.formatMessage({ id: 'support_paragraph' })}
        />
        <div className={supportStyles.container}>
          <Container>
            <TransactionHandlersVoteproducer />
          </Container>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Index);
