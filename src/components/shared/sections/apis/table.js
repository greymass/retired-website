import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Table, Header, Image, Label, Icon, Visibility } from "semantic-ui-react"

import EosApi from 'eosjs-api';

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
    name: 'eos',
    logo: eosLogo,
    v1: true
  },
  {
    url: 'https://telos.greymass.com',
    name: 'telos',
    logo: telosLogo,
  },
  {
    url: 'https://jungle.greymass.com',
    name: 'jungle',
    logo: jungleLogo,
  },
  {
    url: 'https://wax.greymass.com',
    name: 'wax',
    logo: waxLogo,
  },
  {
    url: 'https://instar.greymass.com',
    name: 'instar',
    logo: instarLogo,
  },
  {
    url: 'https://lynx.greymass.com',
    name: 'lynx',
    logo: lynxLogo,
  },
]

class Apis extends React.Component {
  state = { responseTimes: {}, triggeredUpdate: false };

  handleUpdate = () => {
    const { triggeredUpdate } = this.state;

    if (triggeredUpdate) {
      return;
    }

    this.setState({ triggeredUpdate: true });

    setInterval(() => this.tick(), 30000);

    this.tick();
  }

  tick = async () => {
    const newResponseTimes = {};

    await Promise.all(nodes.map(node => {
      return new Promise(resolve => {
        checkResponseTime(node).then(responseTime => {
          newResponseTimes[node.name] = responseTime;

          resolve();
        })
      })
    }))

    this.setState({ responseTimes: newResponseTimes });
  }

  render() {
    const { intl } = this.props;

    const { responseTimes } = this.state;

    return (
      <Visibility className={apisTableStyles.container} onUpdate={this.handleUpdate}>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{intl.formatMessage({ id: 'shared_apis_table_header_name' })}</Table.HeaderCell>
              <Table.HeaderCell>{intl.formatMessage({ id: 'shared_apis_table_header_status' })}</Table.HeaderCell>
              <Table.HeaderCell>{intl.formatMessage({ id: 'shared_apis_table_header_response_time' })}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {nodes.map(node =>  (
              <Table.Row key={node.name}>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src={node.logo} rounded size='mini'/>
                    <Header.Content>
                      {node.name}
                      <Header.Subheader>{node.url}</Header.Subheader>
                      {node.v1 && (<Label size="mini" color="teal" content="v1 history"/>)}
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  {!!responseTimes[node.name] ? (
                    <Icon name="check" size="large" color="green" />
                  ) : (
                    <Icon name="close" size="large" color="red" />
                  )}
                </Table.Cell>
                <Table.Cell>
                  {responseTimes[node.name] ?
                    `${responseTimes[node.name]} ms` :
                    '----'
                  }
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Visibility>
    )
  }
}

export default injectIntl(Apis);

async function checkResponseTime(node) {
  const eos = EosApi({ httpEndpoint:  node.url });
  const timeBefore = Date.now();

  const fetchedInfo = await new Promise(resolve => {
    eos.getInfo((error) => {
      resolve(!error);
    });
  });

  return fetchedInfo && Date.now() - timeBefore;
}
