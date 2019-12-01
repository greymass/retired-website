import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

import AboutValues from '../components/about/values';
import AboutTeamMembers from '../components/about/teamMembers';
import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';

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
    v1: true
  },
  {
    url: 'jungle.greymass.com',
    name: 'jungle',
    logo: jungleLogo,
    v1: true
  },
  {
    url: 'wax.greymass.com',
    name: 'wax',
    logo: waxLogo,
    v1: true
  },
  {
    url: 'instar.greymass.com',
    name: 'instar',
    logo: instarLogo,
    v1: true
  },
  {
    url: 'lynx.greymass.com',
    name: 'lynx',
    logo: lynxLogo,
    v1: true
  },
]

class Apis extends React.Component {
  render() {
    const { intl } = this.props;

    return (
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{intl.message({ id: 'apis_header_name' })}</Table.HeaderCell>
            <Table.HeaderCell>{intl.message({ id: 'apis_header_response_time' })}</Table.HeaderCell>
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
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {responseTimes[node.name]}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default injectIntl(Apis);
