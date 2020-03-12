import React, { Component } from "react";
import { Button, Header, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';

import FuelControlsMenu from './controls/menu';
import FuelControlsOverview from './controls/overview';

const apiUrl = 'https://eos.greymass.com/v1/fuel'

class FuelControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      client: false,
      menuItem: 'overview'
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 3000)
    this.tick()
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.getClient();
    this.getCosigners();
  }
  getClient = async () => {
    const { account } = this.props;
    const results = await axios.post(`${apiUrl}/get_client`, {
      client: account.name
    });
    const { data } = results
    this.setState({ client: data })
  }
  getCosigners = async () => {
    // const { account } = this.props;
    // const results = await axios.post(`${apiUrl}/get_cosigners`, {
    //   cosigner: 'greymassfuel'
    // });
    // const { data } = results
    // console.log(data)
    this.setState({ cosigner: {
      "account" : "greymassfuel",
      "permission" : "cosign",
      "fee_ms" : 50,
      "fee_ms_package" : 35,
      "rules" : [
              {
                      "accounts" : [ ],
                      "quota_cpu" : 10000,
                      "quota_net" : 100000,
                      "quota_expire" : 86400,
                      "whitelist" : [
                              "decentiumorg:::"
                      ]
              },
              {
                      "accounts" : [
                              "eoshasdoneit",
                              "eosredtapped"
                      ],
                      "quota_cpu" : 50000,
                      "quota_net" : 10000,
                      "quota_expire" : 86400,
                      "whitelist" : [ ]
              },
              {
                      "accounts" : [ ],
                      "quota_cpu" : 5000,
                      "quota_net" : 5000,
                      "quota_expire" : 86400,
                      "whitelist" : [ ]
              }
      ]
    }})
  }
  onMenuChange = (e, { name }) => this.setState({ menuItem: name })
  render() {
    if (!this.state) return false
    const {
      account,
      chainName,
      logout,
      purchase,
    } = this.props;
    const {
      client,
      cosigner,
      menuItem,
    } = this.state;
    return (
      <React.Fragment>
        <Grid.Row centered>
          <Grid.Column width={12}>
            <Segment stacked>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <Segment basic>
                      <Header textAlign="center">
                        {account.name}@{account.authority}
                      </Header>
                      <Button
                        basic
                        content="Logout"
                        fluid
                        onClick={logout}
                        size="mini"
                      />
                    </Segment>
                    <FuelControlsMenu
                      menuItem={menuItem}
                      onMenuChange={this.onMenuChange}
                    />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    {(menuItem === "overview")
                      ? (
                        <FuelControlsOverview
                          account={account}
                          client={client}
                          cosigner={cosigner}
                          purchase={purchase}
                        />
                      )
                      : false
                    }
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

export default FuelControls;
