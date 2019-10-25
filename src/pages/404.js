import React from 'react';

import Layout from '../components/layout';
import SharedHeader from '../components/shared/sections/header';

class NotFound404 extends React.Component {
  render() {
    return (
      <Layout>
        <SharedHeader
          title="Page not found"
          paragraph="This page doesn't seem to exist!"
        />
      </Layout>
    )
  }
}

export default NotFound404;
