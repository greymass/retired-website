import React  from 'react';
import {
  Button,
  Form,
  Header,
  Image,
  Modal,
  Segment,
} from "semantic-ui-react"

import SharedElementsChainLogo from '../../../shared/elements/chainLogo';
import TransitWrapper from '../../../shared/wrappers/transit';

import loginStyles from './login.module.css';

import chains from '../../../../constants/chains';

class SharedModalsTransitLogin extends TransitWrapper {
  componentDidMount() {
    const { blockchain } = this.props;

    this.setState({ blockchain });

    super.componentDidMount.apply(this);
  }

  transitLogin = async (walletName) => {
    const { onClose } = this.props;
    const { blockchain } = this.state;

    this.setState({
      processing: true,
    });

    await this.login(walletName, blockchain);
    this.setState({ processing: false });
    onClose();
  }

  render() {
    const {
      onClose,
      open,
    } = this.props;
    const {
      blockchain,
      processing,
    } = this.state;

    const productionChains = Object.values(chains).filter(chain => {
      return process.env.NODE_ENV === 'development' || chain.name !== 'jungle';
    });

    return (
      <Modal
        centered={false}
        className={loginStyles.modal}
        content={(
          <Segment
            basic
            padded
            secondary
            style={{ marginTop: 0 }}
            loading={processing}
          >
            <Form>
              <Segment.Group horizontal>
                {productionChains.map(chain => (
                  <Segment
                    basic
                    onClick={() => this.setState({ blockchain: chain.name})}
                    secondary
                    textAlign="center"
                  >
                    <SharedElementsChainLogo
                      chain={chain.name}
                    />
                    <Header
                      style={{ marginTop: 0 }}
                    >
                      {chain.name.toUpperCase()}
                    </Header>
                    <Form.Radio
                      name='blockchain'
                      checked={chain.name === blockchain}
                    />
                  </Segment>
                ))}
              </Segment.Group>
            </Form>
            <Segment basic textAlign="center">
              <Header>
                {(blockchain)
                  ? `Login to the ${blockchain} blockchain using one of the following wallets:`
                  : `Select a blockchain to continue.`
                }
              </Header>
              <Button
                content="Anchor"
                disabled={!blockchain}
                onClick={() => this.transitLogin('anchor-link')}
                primary
                size="large"
              />
              <Button
                content="Scatter"
                disabled={!blockchain}
                onClick={() => this.transitLogin('scatter')}
                primary
                size="large"
              />
            </Segment>
          </Segment>
        )}
        closeIcon
        dimmer="inverted"
        header="Select a blockchain and signature provider to sign in."
        open={open}
        onClose={onClose}
      />
      );
  }
}

export default SharedModalsTransitLogin;
