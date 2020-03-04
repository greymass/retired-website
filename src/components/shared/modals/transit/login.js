import React  from 'react';
import { Button, Header, Segment, Grid, Dropdown, Modal, Divider, Container } from "semantic-ui-react"

import TransitWrapper from '../../../shared/wrappers/transit';

import chains from '../../../../constants/chains';

import loginStyles from './login.module.css';

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
              loading={processing}
              basic
            >
              {blockchain ? (
                <>
                  <Button
                    content="< Back"
                    onClick={() => this.setState({ blockchain: null })}
                    size="mini"
                  />
                  <hr />
                </>
              ) : (
                <>
                  <Header>
                    Select a blockchain to connect to
                  </Header>
                  {Object.values(chains).map(chain => (
                    <Button
                      content={`Login on ${chain.name.toUpperCase()}`}
                      onClick={() => this.setState({ blockchain: chain.name })}
                      primary
                      size="huge"
                    />
                  ))}
                </>
              )}
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
              {(!account && blockchain) && (
                <Segment
                  basic
                  textAlign="center"
                >
                  <Button
                    content="Login with Scatter"
                    onClick={() => this.transitLogin('scatter')}
                    primary
                    size="huge"
                  />
                  <Button
                    content="Login with Anchor"
                    onClick={() => this.transitLogin('anchor-link')}
                    primary
                    size="huge"
                  />
                </Segment>
              )}
            </Segment>
          </Modal.Content>
        )}
        closeIcon
        dimmer="inverted"
        header="Login"
        open
        onClose={onClose}
      />
      );
  }
}

export default SharedModalsTransitLogin;
