import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
import { Container, Grid } from "semantic-ui-react"


import AboutValuesCard from './values/card';

import aboutValuesStyle from './values.module.css';

class AboutValues extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className={aboutValuesStyle.container}>
        <Container>
          <h4 className={aboutValuesStyle.headerText}>
            {intl.formatMessage({ id: 'about_values_title' })}
          </h4>

          <p className={aboutValuesStyle.paragraphText}>
            {intl.formatMessage({ id: 'about_values_description_one' })}
          </p>

          <p className={aboutValuesStyle.paragraphText}>
            {intl.formatMessage({ id: 'about_values_description_two' })}
          </p>

          <Grid className={aboutValuesStyle.grid} stackable centered padded>
            <AboutValuesCard
              description={intl.formatMessage({ id: 'about_values_reliability_description' })}
              iconName="thumbs up"
              title={intl.formatMessage({ id: 'about_values_reliability_title' })}
            />
            <AboutValuesCard
              description={intl.formatMessage({ id: 'about_values_engagement_description' })}
              iconName="comments"
              title={intl.formatMessage({ id: 'about_values_engagement_title' })}
            />
            <AboutValuesCard
              description={intl.formatMessage({ id: 'about_values_trust_description' })}
              iconName="handshake"
              title={intl.formatMessage({ id: 'about_values_trust_title' })}
            />
          </Grid>
        </Container>
      </div>
    )
  }
}

export default injectIntl(AboutValues);
