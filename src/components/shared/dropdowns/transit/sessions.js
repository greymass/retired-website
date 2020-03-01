import React  from 'react';
import { Button, Header, Segment, Grid, Dropdown, Modal, Divider, Container } from "semantic-ui-react"

import { debounce } from 'lodash';

import TransitWrapper from '../../shared/wrappers/transit';
import { Card } from "semantic-ui-react/dist/commonjs/views/Card"
import { List } from "semantic-ui-react/dist/commonjs/elements/List"
import { Form } from "semantic-ui-react/dist/commonjs/collections/Form"

class SharedModalsTransitLogin extends TransitWrapper {
  state = {
    processing: false,
  };

  componentDidMount() {
    const { blockchain } = this.props;

    this.setState({ blockchain });
  }

  transitLogin = async (walletName) => {
    const { setSigner } = this.props;
    const { blockchain } = this.state;

    this.setState({
      processing: true,
    })
    await setSigner(walletName, blockchain);
    this.setState({ processing: false });
  }

  render() {
    const {
      onClose,
    } = this.props;
    const {
      account,
      blockchain,
      processing,
    } = this.state;

    return (
      <Dropdown text='Shopping' pointing className='link item'>
        <Dropdown.Menu>
          <Dropdown.Header>Categories</Dropdown.Header>
          <Dropdown.Item>
            <Dropdown text='Switch Account'>
              <Dropdown.Menu>
                <Dropdown.Header>Select Account</Dropdown.Header>
                {transitSessions.map(transitSession => (
                  <Dropdown.Item>{transitSession.name}</Dropdown.Item>
                ))}
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>+ Add account</Dropdown.Header>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>Login</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default SharedModalsTransitLogin;
