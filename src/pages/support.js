import React, { Component } from 'react';

import { injectIntl } from 'gatsby-plugin-intl';
import { Container, Grid, Header, Segment } from "semantic-ui-react"

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
            <Grid>
              <Grid.Row centered>
                <Grid.Column computer={12} tablet={14} mobile={16}>
                  <TransactionHandlersVoteproducer />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header>
                    SECTION: What are block producers and why are they paid?
                  </Header>
                  <p>Explanation block producers, how they are paid, and why voting is important.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header>
                    SECTION: What is the Greymass Proxy?
                  </Header>
                  <p>Explanation of the proxy we operate, a link to the post about it, and other various information.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header>
                    SECTION: Use your own wallet to vote
                  </Header>
                  <p>Information on how to vote with your stand alone wallet.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header>
                    SECTION: Have a question or want to talk with our team?
                  </Header>
                  <p>Email, telegram links, etc etc</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Index);
