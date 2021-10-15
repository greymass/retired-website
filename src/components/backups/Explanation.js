import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";

import keyCertificate from "../../images/key_certificate.png";

import explanationStyles from "./explanation.module.css";

export default class Explanation extends Component {
  render() {
    return (
      <div className={explanationStyles.explanation}>
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
        <div className={explanationStyles.keyCertificateArrowExplanations}>
          <Grid>
            <Grid.Row>
              <Arrow />
              <div className={explanationStyles.explanationPoint}>
              </div>
            </Grid.Row>
          </Grid>

        </div>
      </div>
    );
  }
}

const Arrow = () => (
  <div className={explanationStyles.arrow}>
    <div className={explanationStyles.arrowLine}></div>
    <div className={explanationStyles.arrowPoint}></div>
  </div>
);
