import React  from 'react';
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Form,
  Grid,
  Header,
  Image,
  Modal,
  Radio,
  Segment,
} from "semantic-ui-react"

import TransitWrapper from '../../../shared/wrappers/transit';

import chains from '../../../../constants/chains';

import eosLogo from '../../../../images/blockchains/eos.png';
import jungleLogo from '../../../../images/blockchains/jungle.png';
import telosLogo from '../../../../images/blockchains/telos.jpg';
import waxLogo from '../../../../images/blockchains/wax.png';

import loginStyles from './login.module.css';

const logos = {
  'eos': eosLogo,
  'jungle': jungleLogo,
  'telos': telosLogo,
  'wax': waxLogo,
}

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
    } = this.props;
    const {
      account,
      blockchain,
      processing,
    } = this.state;

    return (
      <Modal
        centered={false}
        className={loginStyles.modal}
        content={(
          <Modal.Content>
            <Segment
              basic
              loading={processing}
            >
              <Header textAlign="center">
                Which blockchain would you like to authenticate with?
              </Header>
              <Form>
                <Segment.Group horizontal>
                  {Object.values(chains).map(chain => (
                    <Segment
                      basic
                      onClick={() => this.setState({ blockchain: chain.name})}
                      secondary
                      textAlign="center"
                    >
                      <Image
                        centered
                        src={logos[chain.name]}
                        size="small"
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
              {(blockchain)
                ? (
                  <Segment basic textAlign="center">
                    <Header>
                      Login to the {blockchain} blockchain using one of the following wallets:
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
                )
                : false
              }
              {account && (
                <>
                  <Header
                    textAlign="center"
                  >
                    Signed in as "{account.name}".
                    &nbsp;
                    &nbsp;
                    <Button
                      content="Logout"
                      onClick={this.logout}
                      size="mini"
                    />
                  </Header>
                  <br />
                  <Grid>
                    <Grid.Column width={4} textAlign="center">
                      <Button
                        content="Proxy your Vote"
                        onClick={this.proxyVotes}
                        primary
                        size="huge"
                      />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      {(account.voter_info.producers.length === 30) && (
                        <Dropdown
                          options={account.voter_info.producers}
                          placeholder="Remove one of your votes"
                          onChange={
                            (value) => this.setState({ voteToRemove: value })
                          }
                        />
                      )}
                      <Button
                        content="Vote for Greymass"
                        onClick={this.vote}
                        primary
                        size="huge"
                      />
                    </Grid.Column>
                  </Grid>
                </>
              )}
            </Segment>
          </Modal.Content>
        )}
        closeIcon
        dimmer="inverted"
        open
        onClose={onClose}
      />
      );
  }
}

export default SharedModalsTransitLogin;
