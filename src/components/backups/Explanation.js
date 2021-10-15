import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";

import keyCertificate from "../../images/key_certificate.png";

import explanationStyles from "./explanation.module.css";

export default class Explanation extends Component {
  state = {};
  render() {
    const { viewingExplanationOf } = this.state;

    const privateKeyExplanation = (
      <p>
        Encrypted private key (redundancy 1)
      </p>
    );

    const qrExplanation = (
      <p>
        Recovery QR Code containing all information needed to recover your account. Scan the code for fast recovery (redundancy 3)
      </p>
    );

    const mnemonicKeyExplanation = (
      <p>
        Encrypted private key as mnemonic (redundancy 2)
      </p>
    );

    const encryptionKeyExplanation = (
      <p>
        The rest of the private key is encrypted with 6 encryption words.<br /> <strong>The owner key certificate will not be valid wtihout them correctly written down. </strong>
        <br />
        NO REDUNDANCY
      </p>
    );

    let mobileExplanation;

    switch (viewingExplanationOf) {
      case 'privateKey':
        mobileExplanation = privateKeyExplanation;
        break;
      case 'qr':
        mobileExplanation = qrExplanation;
        break;
      case 'mnemonicKey':
        mobileExplanation = mnemonicKeyExplanation;
        break;
      case 'encryptionKey':
        mobileExplanation = encryptionKeyExplanation;
        break;
    }

    return (
      <div className={explanationStyles.container}>
        <h2 className={explanationStyles.title}>Certificate explanation</h2>

        <div className={explanationStyles.mobileInstructions}>
          <p>
            Please click on a highlighted portion of the sheet to view it's purpose.
          </p>
        </div>

        <div className={explanationStyles.imageContainer}>
          <Image
            alt='backups-header-image'
            src={keyCertificate}
            style={{ width: 300 }}
          />
        </div>

        <div className={explanationStyles.mobileExplanation}>
          {mobileExplanation}
        </div>


        <div
          onClick={() => this.setState({ viewingExplanationOf: 'privateKey' })}
          className={`${explanationStyles.transparentRectangle} ${explanationStyles.privateKey}`}
        />

        <div
          onClick={() => this.setState({ viewingExplanationOf: 'qr' })}
          className={`${explanationStyles.transparentRectangle} ${explanationStyles.QR}`}
        />

        <div
          onClick={() => this.setState({ viewingExplanationOf: 'mnemonicKey' })}
          className={`${explanationStyles.transparentRectangle} ${explanationStyles.mnemonicKey}`}
        />

        <div
          onClick={() => this.setState({ viewingExplanationOf: 'encryptionKey' })}
          className={`${explanationStyles.transparentRectangle} ${explanationStyles.encryptionKey}`}
        />

        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.privateKey}`}>
          <ArrowExplanation sizeOfArrow="short">
            {privateKeyExplanation}
          </ArrowExplanation>
        </div>

        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.QR}`}>
          <ArrowExplanation sizeOfArrow="long">
            {qrExplanation}
          </ArrowExplanation>
        </div>

        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.mnemonicKey}`}>
          <ArrowExplanation sizeOfArrow="short">
            {mnemonicKeyExplanation}
          </ArrowExplanation>
        </div>

        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.encryptionKey}`}>
          <ArrowExplanation sizeOfArrow="short">
            {encryptionKeyExplanation}
          </ArrowExplanation>
        </div>
      </div>
    );
  }
}

const ArrowExplanation = ({ sizeOfArrow, children }) => (
  <Grid>
    <Grid.Column width={sizeOfArrow === 'short' ? 2 : 5}>
      <div className={explanationStyles[`${sizeOfArrow}Arrow`]}>
        <div className={explanationStyles.arrowLine}></div>
        <div className={explanationStyles.arrowPoint}></div>
      </div>
    </Grid.Column>
    <Grid.Column style={{ paddingLeft: sizeOfArrow === 'short' ? 14 : 11 }} width={sizeOfArrow === 'short' ? 12 : 11}>
      {children}
    </Grid.Column>
  </Grid>
);
