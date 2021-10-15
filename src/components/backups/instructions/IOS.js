import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby";
import { Grid } from "semantic-ui-react";

import Instruction from './shared/Instruction';
import RecoveryCompleted from './shared/RecoveryCompleted';

import sharedStyles from './shared.module.css';

class InstructionsIOS extends Component {
  render() {
    const { iosDownloadUrl } = this.props.data.site.siteMetadata.anchor;

    return (
      <div className={sharedStyles.container}>
        <Grid>
          <Instruction number={1}>
            <p>
              Verify that you have a <strong>valid certificate</strong> and that encryption key words are clearly written down
            </p>
          </Instruction>
          <Instruction number={2}>
            <p>
              Download Anchor if you dont have it installed yet and <strong>launch the app</strong>.
              &nbsp;<a href={iosDownloadUrl}>Download Anchor now</a>
            </p>
          </Instruction>
          <Instruction number={3}>
            <p>
              In Anchor app -> add account -> <strong>recover from key certificate</strong>
            </p>
          </Instruction>
          <Instruction number={4}>
            <p>
              <strong>Scan QR Code</strong> on the key certificate or enter the memonic key manually
            </p>
          </Instruction>
          <Instruction number={5}>
            <p><strong>Enter the encryption key words</strong></p>
          </Instruction>
          <Instruction number={6}>
            <p>Select your security options and <strong>complete the setup</strong></p>
          </Instruction>

          <RecoveryCompleted />
        </Grid>
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
       query {
          site {
            siteMetadata {
              anchor {
                iosDownloadUrl
              }
            }
          }
        }
    `}
    render={data => <InstructionsIOS data={data} {...props} />}
  />
);
