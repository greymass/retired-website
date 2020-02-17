import React, { Component } from "react";
import { Button, Header, Grid, Icon, Segment } from 'semantic-ui-react';
import QRCode from 'qrcode';

class FuelLoginLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {
    console.log(this.state.uri)
    if (this.props.identityRequest && !this.state.uri) {
      const canvas = this.refs.canvas;
      setTimeout(async () => {
        const uri = await this.props.identityRequest.encode();
        this.setState({
          uri
        }, () => {
          QRCode.toCanvas(canvas, this.state.uri, {
            scale: 6
          }, function (error) {
            if (error) console.error(error)
          });
        })
      }, 1)
    }
  }
  render() {
    const {
      signer
    } = this.props;

    return (
      <React.Fragment>
        <Grid.Row centered>
          <Grid.Column width={10} textAlign="center">
            <Segment padded stacked textAlign="center">
              <Header icon>
                <Icon color="grey" name="circle notched" loading/>
                <Header.Content>
                  Connecting to
                  {' '}
                  <span style={{ textTransform: 'capitalize' }}>{signer}</span>
                  ...
                  <Header.Subheader>

                  </Header.Subheader>
                </Header.Content>
              </Header>
              <div>
                <Button
                  content="Cancel"
                  onClick={() => this.props.setSigner(false)}
                />
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}

export default FuelLoginLoader;
