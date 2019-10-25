import React, { Component } from "react"

import { Container, Grid } from "semantic-ui-react"


import AboutValuesCard from './values/card';

import aboutValuesStyle from './values.module.css';

class AboutValues extends Component {
  render() {
    return (
      <div className={aboutValuesStyle.container}>
        <Container>
          <h4 className={aboutValuesStyle.headerText}>
            {'values_title'}
          </h4>

          <p className={aboutValuesStyle.paragraphText}>
            {'values_description_one'}
          </p>

          <p className={aboutValuesStyle.paragraphText}>
            {'values_description_two'}
          </p>

          <Grid className={aboutValuesStyle.grid} stackable centered padded>
            <AboutValuesCard
              description={'values_reliability_description'}
              iconName="thumbs up"
              title={'values_reliability_title'}
            />
            <AboutValuesCard
              description={'values_engagement_description'}
              iconName="comments"
              title={'values_engagement_title'}
            />
            <AboutValuesCard
              description={'values_trust_description'}
              iconName="handshake"
              title={'values_trust_title'}
            />
          </Grid>
        </Container>
      </div>
    )
  }
}

export default AboutValues;
