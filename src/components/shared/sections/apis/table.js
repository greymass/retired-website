import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Table, Header, Image, Label, Icon, Visibility } from "semantic-ui-react"

import EosApi from 'eosjs-api';

import eosLogo from '../../../../images/blockchain-eos-logo.svg';
import instarLogo from '../../../../images/blockchain-insights-logo.svg';
import jungleLogo from '../../../../images/blockchain-eos-logo.svg'; // change for real logo
import lynxLogo from '../../../../images/blockchain-eos-logo.svg'; // change for real logo
import telosLogo from '../../../../images/blockchain-telos-logo.svg';
import waxLogo from '../../../../images/blockchain-eos-logo.svg';

import apisTableStyles from './table.module.css';

const nodes = [
  {
    url: 'eos.greymass.com',
    name: 'eos',
    logo: eosLogo,
    v1: true
  },
  {
    url: 'telos.greymass.com',
    name: 'telos',
    logo: telosLogo,
  },
  {
    url: 'jungle.greymass.com',
    name: 'jungle',
    logo: jungleLogo,
  },
  {
    url: 'wax.greymass.com',
    name: 'wax',
    logo: waxLogo,
  },
  {
    url: 'instar.greymass.com',
    name: 'instar',
    logo: instarLogo,
  },
  {
    url: 'lynx.greymass.com',
    name: 'lynx',
    logo: lynxLogo,
  },
]

class Apis extends React.Component {
  state = { responseTimes: {}, triggeredUpdate: false };

  handleUpdate = () => {
    const { triggeredUpdate } = this.state;
    console.log('update')

    if (triggeredUpdate) {
      return;
    }

    this.setState({ triggeredUpdate: true })

    this.click();
  }

  click = () => {
    const newResponseTimes = Promise.all(nodes.map(node => {
      return checkResponseTime(node);
    }))

    this.setState({ responseTimes: newResponseTimes })
  }

  render() {
    const { intl } = this.props;

    const { responseTimes } = this.state;

    return (
      <Visibility className={apisTableStyles.container} onUpdate={this.handleUpdate}>
        <Table celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{intl.formatMessage({ id: 'shared_apis_table_header_name' })}</Table.HeaderCell>
              <Table.HeaderCell>{intl.formatMessage({ id: 'shared_apis_table_header_status' })}</Table.HeaderCell>
              <Table.HeaderCell>{intl.formatMessage({ id: 'shared_apis_table_header_response_time' })}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {nodes.map(node =>  (
              <Table.Row>
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
                  {responseTimes[node.name]}
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
  const eos = EosApi(node.url);
  const timeBefore = Date.now();
  await eos.getInfo();

  return Date.now() - timeBefore;
}
