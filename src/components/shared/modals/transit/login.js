import React  from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Modal,
  Segment,
} from "semantic-ui-react"

import SharedElementsChainLogo from '../../../shared/elements/chainLogo';
import TransitWrapper from '../../../shared/wrappers/transit';
import MessagesTransitError from '../../messages/transit/error';

import loginStyles from './login.module.css';

import chains from '../../../../constants/chains';

class SharedModalsTransitLogin extends TransitWrapper {
  componentDidMount() {
    const { blockchain } = this.props;

    this.setState({ blockchain });

    super.componentDidMount.apply(this);
  }

  onClose = () => {
    const { onClose } = this.props;

    this.setState({ error: null });

    onClose();
  }

  transitLogin = async (walletName) => {
    const { blockchain } = this.state;

    this.setState({
      processing: true,
      error: null,
    });

    const { error } = await this.login(walletName, blockchain);

    this.setState({ processing: false });

    if (!error) {
      this.onClose();
    }
  }

  render() {
    const {
      open,
    } = this.props;
    const {
      blockchain,
      error,
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
              <Grid stackable>
                <Grid.Row columns={productionChains.length}>
                  {productionChains.map(chain => (
                    <Grid.Column
                      basic
                      onClick={() => this.setState({ blockchain: chain.name})}
                      secondary
                      style={{
                        cursor: 'pointer'
                      }}
                      textAlign="center"
                    >
                      <Segment>
                        <SharedElementsChainLogo
                          chain={chain.name}
                          size="tiny"
                        />
                        <Header
                          style={{ marginTop: '0.5em' }}
                        >
                          {chain.name.toUpperCase()}
                        </Header>
                        <Form.Checkbox
                          name='blockchain'
                          checked={chain.name === blockchain}
                        />

                      </Segment>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
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
                className="mobile-hidden"
                content="Scatter"
                disabled={!blockchain}
                onClick={() => this.transitLogin('scatter')}
                primary
                size="large"
              />
            </Segment>

            {error && (
              <MessagesTransitError
                error={error}
              />
            )}
          </Segment>
        )}
        closeIcon
        dimmer="inverted"
        header="Select a blockchain and signature provider to sign in."
        open={open}
        onClose={this.onClose}
      />
      );
  }
}

export default SharedModalsTransitLogin;
