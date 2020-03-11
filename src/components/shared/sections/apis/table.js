import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Table, Header, Image, Label, Icon, Responsive } from "semantic-ui-react"

import { JsonRpc } from 'eosjs';

import SharedElementsChainLogo from '../../../shared/elements/chainLogo';
import apisTableStyles from './table.module.css';

const nodes = [
  {
    logo: 'eos',
    url: 'https://eos.greymass.com',
    name: 'EOS',
    v1: true,
  },
  {
    logo: 'instar',
    url: 'https://instar.greymass.com',
    name: 'Instar',
    v1: true,
  },
  {
    logo: 'lynx',
    url: 'https://lynx.greymass.com',
    name: 'Lynx',
    v1: true,
  },
  {
    logo: 'telos',
    url: 'https://telos.greymass.com',
    name: 'Telos',
    v1: true,
  },
  {
    logo: 'wax',
    url: 'https://wax.greymass.com',
    name: 'WAX',
    v1: true,
  },
  {
    logo: 'fio',
    url: 'https://fiotestnet.greymass.com',
    name: 'FIO (Testnet)',
    v1: true,
  },
  {
    logo: 'jungle',
    url: 'https://jungle.greymass.com',
    name: 'Jungle (Testnet)',
    v1: true,
  },
  {
    logo: 'lynx',
    url: 'https://lynxtestnet.greymass.com',
    name: 'Lynx (Testnet)',
    v1: true,
  },
  {
    logo: 'wax',
    url: 'https://waxtestnet.greymass.com',
    name: 'WAX (Testnet)',
    v1: true,
  },
]

class Apis extends React.Component {
  state = {
    responses: [],
  };

  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
    }
    this.tick();
    setInterval(() => this.tick(), 3000);
  }

  tick = async () => this.setState({
    responses: await Promise.all(nodes.map(async (node) => {
      try {
        const start = Date.now();
        const eos = new JsonRpc(node.url);
        const info = await eos.get_info()
        return {
          ...node,
          height: info.head_block_num,
          ms: Date.now() - start,
          time: info.head_block_time,
        }
      } catch (err) {
        return {
          ...node,
          err,
        }
      }
    }))
  })

  render() {
    const { intl } = this.props;
    const { responses } = this.state;

    // wait for first responses
    if (!responses.length) return false

    return (
      <div className={apisTableStyles.container}>
        <Table definition unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>
                {intl.formatMessage({ id: 'shared_apis_table_header_name' })}
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                {intl.formatMessage({ id: 'shared_apis_table_header_features' })}
              </Table.HeaderCell>
              <Responsive as={Table.HeaderCell} minWidth={768} textAlign="center">
                {intl.formatMessage({ id: 'shared_apis_table_header_height' })}
              </Responsive>
              <Responsive as={Table.HeaderCell} minWidth={768} textAlign="center">
                {intl.formatMessage({ id: 'shared_apis_table_header_status' })}
              </Responsive>
              <Table.HeaderCell textAlign="center">
                {intl.formatMessage({ id: 'shared_apis_table_header_response_time' })}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {responses.map(response =>  (
              <Table.Row key={response.name}>
                <Table.Cell collapsing>
                  <SharedElementsChainLogo
                    chain={response.logo}
                    size="mini"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      {response.name}
                      <Header.Subheader>{response.url}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Responsive as={Table.Cell} minWidth={768} textAlign="center">
                  <Label color="blue" content="History (V1)"/>
                </Responsive>
                <Responsive as={Table.Cell} minWidth={768} textAlign="center">
                  {response.height}
                </Responsive>
                <Table.Cell textAlign="center">
                  {!!response.ms ? (
                    <Icon name="check" size="large" color="green" />
                  ) : (
                    <Icon name="close" size="large" color="red" />
                  )}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {response.ms ?
                    `${response.ms} ms` :
                    '----'
                  }
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default injectIntl(Apis);
