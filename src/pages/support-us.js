import React, { Component } from 'react';

import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl';
import { Container, Divider, Grid, Header, List, Segment } from "semantic-ui-react"

import Layout from '../components/layout';
import TransactionHandlersVoteproducer from '../components/support/transactionHandlers/voteProducer';
import SharedHeader from '../components/shared/sections/header';
import SharedElementsChainLogo from '../components/shared/elements/chainLogo';
import SharedElementsExplorerLink from '../components/shared/elements/explorerLink';

import supportStyles from './support.module.css';
import SEO from '../components/shared/seo';

const bps = [
  {
    network: 'eos',
    producer: 'teamgreymass',
    proxy: 'greymassvote',
  },
  // {
  //   network: 'fio',
  //   producer: 'teamgreymass',
  // },
  {
    network: 'instar',
    producer: 'teamgreymass',
  },
  {
    network: 'lynx',
    producer: 'teamgreymass',
  },
  {
    network: 'telos',
    producer: 'teamgreymass',
  },
  {
    network: 'wax',
    producer: 'teamgreymass',
  },
]

class Index extends Component {
  render() {
    const { location, intl } = this.props;

    return (
      <Layout location={location}>
        <SEO
          lang={intl.locale}
          keywords={['support us', 'greymass']}
          title="Support Us"
        />
        <SharedHeader
          title={intl.formatMessage({ id: 'support_header' })}
          paragraph={intl.formatMessage({ id: 'support_paragraph' })}
        />
        <div className={supportStyles.container}>
          <Container>
            <Grid stackable>
              <Grid.Row centered>
                <Grid.Column computer={12} tablet={14} mobile={16}>
                  <TransactionHandlersVoteproducer
                    bps={bps}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column
                  style={{
                    padding: '40px 0 0'
                  }}
                  textAlign="center"
                >
                  <Header size="small">
                    {intl.formatMessage({ id: 'support_explanation_header' })}
                    <Header.Subheader>
                      {intl.formatMessage({ id: 'support_explanation_subheader' })}
                    </Header.Subheader>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row
                columns={bps.length}
                style={{
                  padding: '0 0 40px'
                }}
              >
                {bps.map(bp => (
                  <Grid.Column>
                    <Segment
                      color="blue"
                      stacked
                      textAlign="center"
                    >
                      <SharedElementsChainLogo
                        chain={bp.network}
                        size="mini"
                      />
                      <Header
                        size="small"
                        style={{ margin: 0 }}
                      >
                        {bp.network.toUpperCase()}
                        <Header.Subheader>
                          {intl.formatMessage({ id: 'support_explanation_block_producer' })}
                        </Header.Subheader>
                      </Header>
                      <List>
                        <List.Item>
                          <strong>
                            <SharedElementsExplorerLink
                              chain={bp.network}
                              type="account"
                              value={bp.producer}
                            />
                          </strong>
                        </List.Item>
                      </List>
                    </Segment>
                  </Grid.Column>
                ))}
              </Grid.Row>
              <Grid.Row
                columns={1}
                style={{
                  padding: '0 0 40px'
                }}
              >
                <Grid.Column>
                  <Divider horizontal>
                    {intl.formatMessage({ id: 'support_explanation_continue' })}
                  </Divider>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={10}>
                  <Header>
                    {intl.formatMessage({ id: 'support_explanation_what_are_bps' })}
                  </Header>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_what_are_bps_paragraph_one' })}
                  </p>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_what_are_bps_paragraph_two' })}
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={10}>
                  <Header>
                    {intl.formatMessage({ id: 'support_explanation_what_is_greymass_proxy_header' })}
                  </Header>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_what_is_greymass_proxy_paragraph_one' })}
                  </p>
                  <p>​
                    {intl.formatMessage({ id: 'support_explanation_what_is_greymass_proxy_paragraph_two' })}
                  </p>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_what_is_greymass_proxy_paragraph_three' })}
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={10}>
                  <Header>
                    {intl.formatMessage({ id: 'support_explanation_use_wallet_to_vote_header' })}
                  </Header>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_use_wallet_to_vote_paragraph_one' })}
                  </p>
                  <p>
                    <FormattedHTMLMessage
                      id="support_explanation_use_wallet_to_vote_paragraph_two"
                    />
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={10}>
                  <Header>
                    {intl.formatMessage({ id: 'support_explanation_have_a_question_header' })}
                  </Header>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_have_a_question_paragraph_one' })}
                  </p>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_have_a_question_paragraph_two' })}
                  </p>
                  <p>
                    {intl.formatMessage({ id: 'support_explanation_have_a_question_paragraph_three' })}
                  </p>
                  <p>                    ​
                    {intl.formatMessage({ id: 'support_explanation_have_a_question_paragraph_four' })}
                  </p>
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
