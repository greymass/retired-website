import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Table, Header, Image, Label, Icon, Responsive } from "semantic-ui-react"

import { JsonRpc } from 'eosjs';

import eosLogo from '../../../../images/blockchain-eos-logo.svg';
import instarLogo from '../../../../images/blockchain-insights-logo.svg';
import jungleLogo from '../../../../images/blockchain-eos-logo.svg'; // change for real logo
import lynxLogo from '../../../../images/blockchain-lynx-logo.svg'; // change for real logo
import telosLogo from '../../../../images/blockchain-telos-logo.svg';
import waxLogo from '../../../../images/blockchain-wax-logo.svg';

import apisTableStyles from './table.module.css';

const nodes = [
  {
    url: 'https://eos.greymass.com',
    name: 'EOS',
    logo: eosLogo,
    v1: true,
  },
  {
    url: 'https://instar.greymass.com',
    name: 'Instar',
    logo: instarLogo,
    v1: true,
  },
  {
    url: 'https://lynx.greymass.com',
    name: 'Lynx',
    logo: lynxLogo,
    v1: true,
  },
  {
    url: 'https://telos.greymass.com',
    name: 'Telos',
    logo: telosLogo,
    v1: true,
  },
  {
    url: 'https://wax.greymass.com',
    name: 'WAX',
    logo: waxLogo,
    v1: true,
  },
  {
    url: 'https://jungle.greymass.com',
    name: 'Jungle (Testnet)',
    logo: jungleLogo,
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
                  <Image src={response.logo} rounded size='mini'/>
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
