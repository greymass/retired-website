import React  from 'react';
import { Button, Header, Segment, Grid, Dropdown, Modal, Divider, Container } from "semantic-ui-react"

import TransitWrapper from '../../../shared/wrappers/transit';
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
      <Modal
        centered={false}
        content={(
          <Modal.Content>
            <Segment
              loading={processing}
            >
              {blockchain ? (
                <Button
                  content="< Back"
                  onClick={() => this.setState({ blockchain: null })}
                  primary
                  size="huge"
                />
              ) : (
                <React.Fragment>
                  <Button
                    content="Login on EOS"
                    onClick={() => this.setState({ blockchain: 'eos' })}
                    primary
                    size="huge"
                  />
                  <Button
                    content="Login on WAX"
                    onClick={() => this.setState({ blockchain: 'wax'})}
                    primary
                    size="huge"
                  />
                  <Button
                    content="Login on TELOS"
                    onClick={() => this.setState({ blockchain: 'telos' })}
                    primary
                    size="huge"
                  />
                  <Button
                    content="Login on LYNX"
                    onClick={() => this.setState({ blockchain: 'lynx' })}
                    primary
                    size="huge"
                  />
                  <Button
                    content="Login on INSTAR"
                    onClick={() => this.setState({ blockchain: 'instar' })}
                    primary
                    size="huge"
                  />
                </React.Fragment>
              )}
              {account && (
                <React.Fragment>
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
                    <Grid.Column width={8} textAlign="center">
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
                </React.Fragment>
              )}
              {(!account && blockchain) && (
                <React.Fragment>
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
                </React.Fragment>
              )}
            </Segment>
          </Modal.Content>
        )}
        closeIcon
        dimmer="inverted"
        header="Purchase Fuel"
        open
        onClose={onClose}
      />
      );
  }
}

export default SharedModalsTransitLogin;
