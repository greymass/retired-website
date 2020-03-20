import React, { Component } from 'react';

import { Message } from 'semantic-ui-react';

const errorMessages = {
  'Cannot connect to Scatter': 'Cannot connect to Scatter. Please make sure that the application is running.',
  'user must stake before they can vote': 'You do not seem to have staked any tokens. On the WAX Blockchain, voters must stake before they can vote.',
  'voter holding REX token': 'You seem to be holding some REX tokens. REX token holders need to either vote for 30 bps or proxy their votes.',
  '{"code":"E_CANCEL"}': 'skip',
  '{"code":"E_IDENTITY"}': 'There seems to have been an issue while connecting to your Anchor wallet. Please try again and if the problem persists, feel free to reach out to us.',
};

export default class TransitErrors extends Component {
  render() {
    const {
      error
    } = this.props;

    const errorMessage = processErrorMessage(error);

    return (errorMessage) ? (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p>{errorMessage}</p>
      </Message>
    ) : '';
  }
}

function processErrorMessage(error) {
  if (!error) {
    return 'An error occured. Please contact the Greymass team us for support.';
  }

  const errorString = typeof error === 'object' ? JSON.stringify(error) : error;

  let errorMessage;

  Object.keys(errorMessages).forEach(errorResponse => {
    if (errorString.includes(errorResponse)) {
      errorMessage = errorMessages[errorResponse];
    }
  });

  if (errorMessage === 'skip') {
    return false;
  }

  return errorMessage || errorString;
}
