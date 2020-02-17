import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

import { Container, Header } from 'semantic-ui-react';

import Layout from '../components/layout';

import ApisTable from '../components/shared/sections/apis/table';

import SharedHeader from '../components/shared/sections/header';

import apisStyle from './apis.module.css';

class Apis extends React.Component {
  render() {
    const { intl, location } = this.props;

    return (
      <Layout location={location}>
        <SharedHeader
          title={intl.formatMessage({ id: 'apis_header' })}
          paragraph={intl.formatMessage({ id: 'apis_subheader' })}
        />
        <div className={apisStyle.container}>
          <Container>
            <Header size="large" textAlign="center">API Endpoints</Header>
            <ApisTable />
          </Container>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Apis);
