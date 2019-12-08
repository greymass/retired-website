import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Header, Container } from 'semantic-ui-react';

import Layout from '../components/layout';

import ApisTable from '../components/shared/sections/apis/table';

import apisStyle from './apis.module.css';

class Apis extends React.Component {
  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <Container className={apisStyle.container}>
          <Header as="h2">
            {intl.formatMessage({ id: 'apis_header' })}
            <Header.Subheader as="u1">
              {intl.formatMessage({ id: 'apis_subheader' })}
            </Header.Subheader>
          </Header>

          <ApisTable />
        </Container>
      </Layout>
    )
  }
}

export default injectIntl(Apis);
