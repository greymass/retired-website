import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";

import keyCertificate from "../../images/key_certificate.png";

import explanationStyles from "./explanation.module.css";

export default class Explanation extends Component {
  render() {
    return (
      <div className={explanationStyles.container}>
        <h2 className={explanationStyles.title}>Certificate explanation</h2>
        <div className={explanationStyles.mobileExplanation}>

        </div>
        <div className={explanationStyles.imageContainer}>
          <Image
            alt='backups-header-image'
            src={keyCertificate}
            style={{ width: 300 }}
          />
        </div>
        <div className={explanationStyles.keyCertificateLayover}>

        </div>
        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.privateKey}`}>
          <ArrowExplanation sizeOfArrow="short">
            <p>
              Encrypted private key (redundancy 1)
            </p>
          </ArrowExplanation>
        </div>

        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.QR}`}>
          <ArrowExplanation sizeOfArrow="long">
            <p>
              Recovery QR Code containing all information needed to recover your account. Scan the code for fast recovery (redundancy 3)
            </p>
          </ArrowExplanation>
        </div>

        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.mnemonicKey}`}>
          <ArrowExplanation sizeOfArrow="short">
            <p>
              Encrypted private key as mnemonic (redundancy 2)
            </p>
          </ArrowExplanation>
        </div>

        <div className={`${explanationStyles.arrowExplanation} ${explanationStyles.encryptionKey}`}>
          <ArrowExplanation sizeOfArrow="short">
            <p>
              The rest of the private key is encrypted with 6 encryption words.<br /> <strong>The owner key certificate will not be valid wtihout them correctly written down. </strong>
              <br />
              NO REDUNDANCY
            </p>
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
