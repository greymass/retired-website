import React, { Component } from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';

import { injectIntl } from 'gatsby-plugin-intl';

import preLoginStyles from './preLogin.module.css';

class VoteProducerPreLogin extends Component {
  render() {
    const { onClick, intl } = this.props;
    return (
      <Segment
        className={preLoginStyles.root}
        secondary
        stacked
      >
        <Header
          textAlign='center'
          content={intl.formatMessage({ id: 'support_please_sign_in' })}
        />
        <Button
          content={`Sign in`}
          onClick={onClick}
          primary
          size="large"
        />
      </Segment>
    );
  }
}

export default injectIntl(VoteProducerPreLogin);
