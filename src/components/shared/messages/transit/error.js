import React, { Component } from 'react';

import { Message } from 'semantic-ui-react';

const errorMessages = {
  'Cannot connect to Scatter': 'Cannot connect to Scatter. Please make sure that the application is running.',
  '{"code":"E_CANCEL"}': 'skip',
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
