import React from 'react';
import ReactDOMServer from "react-dom/server"
import { Link } from "gatsby";
import { injectIntl } from 'gatsby-plugin-intl';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Message,
  Segment,
} from 'semantic-ui-react';

import Layout from '../components/layout';

import FuelLogo from '../images/greymassfuel-horizontal.png'

import FuelControls from '../components/fuel/controls';
import FuelLogin from '../components/fuel/login';
import FuelLoginLoader from '../components/fuel/login/loader';
import FuelTransaction from '../components/fuel/transaction';
import FuelUnavailable from '../components/fuel/unavailable';

import SharedElementsChainLogo from '../components/shared/elements/chainLogo';
import TransitWrapper from '../components/shared/wrappers/transit';

import SEO from '../components/shared/seo';

import anchorLogo from '../images/projects/anchor.png';
import fuelStyles from './fuel.module.css';

const chains = ['eos', 'jungle'];

class Fuel extends TransitWrapper {
  purchase = async (pkg) => {
    const { currentTransitSession } = this.state;
    const {
      account,
    } = currentTransitSession;
    const result = await this.transact({
      actions: [{
        authorization: [{
          actor: 'greymassfuel',
          permission: 'cosign',
        }],
        account: 'greymassnoop',
        name: 'noop',
        data: {}
      }, {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: account.name,
          permission: account.authority,
        }],
        data: {
          from: account.name,
          to: 'fuelcontrols',
          quantity: `${(pkg.price / 10000).toFixed(4)} EOS`,
          memo: account.name,
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 120,
    });
    this.setState({
      tx: result
    })
  }
  render() {
    const {
      location,
      intl,
    } = this.props;

    const {
      currentTransitSession,
      tx,
    } = this.state;

    const {
      account,
      chainName,
      signer,
    } = currentTransitSession;

    return (
      <Layout location={location}>
        <SEO
          lang={intl.locale}
          keywords={['fuel', 'greymass']}
          title="Fuel"
        />
        <Container>
          <Grid padded>
            <Grid.Row centered>
              <Grid.Column width={10} textAlign="center">
                <Image
                  alt='greymassfuel-header-image'
                  src={FuelLogo}
                  style={{ margin: '3em 0' }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <div className={fuelStyles.interface}>
          <Container>
            <Grid stackable>
              <Grid.Row centered>
                <Grid.Column width={10} textAlign="center">
                  {(!account)
                    ? <FuelLogin setSigner={this.setSigner} />
                    : false
                  }
                  {(signer && !account)
                    ? (
                      <FuelLoginLoader
                        setSigner={this.setSigner}
                        signer={signer}
                      />
                    )
                    : false
                  }
                  {(signer && account && !chains.includes(chainName))
                    ? (
                      <FuelUnavailable
                        chainName={chainName}
                      />
                    )
                    : false
                  }
                  {(signer && account && chains.includes(chainName) && !tx)
                    ? (
                      <FuelControls
                        account={account}
                        chainName={chainName}
                        logout={this.logout}
                        purchase={this.purchase}
                        signer={signer}
                      />
                    )
                    : false
                  }
                  {(tx)
                    ? (
                      <FuelTransaction
                        clearTx={this.clearTx}
                        tx={tx}
                      />
                    )
                    : false
                  }
                  <Message
                    header={intl.formatMessage({ id: 'fuel_message_header' })}
                    content={intl.formatMessage({ id: 'fuel_message_content' })}
                    textAlign="left"
                    size="large"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div className={fuelStyles.container}>
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={10}>
                  <Segment basic padded size="large">
                    <Header size="huge">
                      {intl.formatMessage({ id: 'fuel_header_one_title' })}
                    </Header>
                    <p>
                      {intl.formatMessage({ id: 'fuel_header_one_paragraph' })}
                    </p>
                    <List bulleted relaxed>
                      <List.Item>
                        <strong>{intl.formatMessage({ id: 'fuel_list_item_one_strong' })}</strong>
                        {' '}
                        {intl.formatMessage({ id: 'fuel_list_item_one_paragraph' })}
                      </List.Item>
                      <List.Item>
                        <strong> {intl.formatMessage({ id: 'fuel_list_item_two_strong' })}</strong>
                        {' '}
                        {intl.formatMessage({ id: 'fuel_list_item_two_paragraph' })}
                      </List.Item>
                    </List>
                    <p>
                      {intl.formatMessage({ id: 'fuel_more_info_paragraph' })}
                      {' '}
                      <Link
                        to="/en/blog/greymass-fuel-a-turn-key-solution-to-cover-the-resource-costs-of-app-users/"
                      >
                        {intl.formatMessage({ id: 'fuel_more_info_link' })}
                      </Link>
                      .
                    </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Segment color="purple" size="large" style={{ marginTop: '3em' }}>
                    <Header>
                      {intl.formatMessage({ id: 'fuel_header_two_title' })}
                    </Header>
                    <p>
                      <div dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                            id: 'fuel_header_two_paragraph_one',
                          },
                          {
                            linkComponent: ReactDOMServer.renderToStaticMarkup(
                              <Link
                                to="/en/blog/integrating-fuel-using-eosjs-v20/"
                              >
                                {intl.formatMessage({ id: 'fuel_header_two_link_one' })}
                              </Link>
                            )
                          })
                      }} />
                    </p>
                    <p>
                      <div dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                            id: 'fuel_header_two_paragraph_two',
                          },
                          {
                            linkComponentOne: ReactDOMServer.renderToStaticMarkup(
                              <a
                                href="https://t.me/greymassfuel"
                              >
                                {intl.formatMessage({ id: 'fuel_header_two_link_two' })}
                              </a>
                            ),
                            linkComponentTwo: ReactDOMServer.renderToStaticMarkup(
                              <a
                                href="mailto:team@greymass.com"
                              >
                                {intl.formatMessage({ id: 'fuel_header_two_link_three' })}
                              </a>
                            )
                          })
                      }} />
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={16}>
                  <Divider horizontal>
                    <Header size="huge" textAlign="center">
                      {intl.formatMessage({ id: 'fuel_header_three_title' })}
                    </Header>
                  </Divider>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={8} textAlign="center">
                  <Segment size="large">
                    <Header>{intl.formatMessage({ id: 'fuel_available_networks_title' })}</Header>
                    <p>
                      {intl.formatMessage({ id: 'fuel_available_networks_subtitle' })}
                    </p>
                    <Grid>
                      <Grid.Row columns={2}>
                        <Grid.Column textAlign="center">
                          <SharedElementsChainLogo
                            chain="eos"
                          />
                          <Header>
                            EOS
                          </Header>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                          <SharedElementsChainLogo
                            chain="jungle"
                          />
                          <Header>
                            Jungle 2 (Testnet)
                          </Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    <p style={{ marginTop: '2em', textAlign: 'center' }}>
                      {intl.formatMessage({ id: 'fuel_available_networks_note' })}
                    </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8} textAlign="center">
                  <Segment size="large">
                    <Header>{intl.formatMessage({ id: 'fuel_available_wallets_title' })}</Header>
                    <p>
                      {intl.formatMessage({ id: 'fuel_available_wallets_subtitle' })}
                    </p>
                    <Grid>
                      <Grid.Row columns={2}>
                        <Grid.Column textAlign="center">
                          <Link
                            to="/en/blog/5ms-worth-of-free-transactions-available-now-in-anchor-wallet/"
                          >
                            <Image
                              centered
                              src={anchorLogo}
                              style={{ maxHeight: '150px' }}
                            />
                            <Header>
                              Anchor
                            </Header>
                          </Link>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                          <a
                            href="https://eosauthority.com"
                          >
                            <Image
                              centered
                              src="https://pbs.twimg.com/profile_images/991949967517462529/xV9RvbEL.jpg"
                              style={{ maxHeight: '150px' }}
                            />
                            <Header>
                              EOSAuthority
                            </Header>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    <p style={{ marginTop: '2em'}}>
                      {intl.formatMessage({ id: 'fuel_available_wallets_note' })}
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <Segment basic size="large">
                    <Divider horizontal>
                      <Header size="huge" textAlign="center">
                        {intl.formatMessage({ id: 'fuel_questions_title' })}
                      </Header>
                    </Divider>
                    <p>
                      {intl.formatMessage({ id: 'fuel_questions_paragraph_one' })}
                    </p>
                    <p>
                      <div dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                            id: 'fuel_questions_paragraph_two',
                          },
                          {
                            linkComponentOne: ReactDOMServer.renderToStaticMarkup(
                              <a
                                href="https://t.me/greymassfuel"
                              >
                                {intl.formatMessage({ id: 'fuel_questions_link_one' })}
                              </a>
                            ),
                            linkComponentTwo: ReactDOMServer.renderToStaticMarkup(
                              <a
                                href="mailto:team@greymass.com"
                              >
                                {intl.formatMessage({ id: 'fuel_questions_link_two' })}
                              </a>
                            )
                          })
                      }} />
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Fuel);
