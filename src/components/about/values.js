import React, { Component } from "react"

import { Container, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';

import AboutValuesCard from './values/card';

import aboutValuesStyle from './values.module.css';

class AboutValues extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className={aboutValuesStyle.container}>
        <h4 className={aboutValuesStyle.headerText}>
          {t('values_title')}
        </h4>

        <h4 className={aboutValuesStyle.paragraphText}>
          {t('values_description')}
        </h4>

        <Grid style={{ padding: '80px' }} stackable centered padded>
          <AboutValuesCard
            description={t('values_reliability_description')}
            iconName="thumbs up"
            title={t('values_reliability_title')}
          />
          <AboutValuesCard
            description={t('values_engagement_description')}
            iconName="comments"
            title={t('values_engagement_title')}
          />
          <AboutValuesCard
            description={t('values_trust_description')}
            iconName="handshake"
            title={t('values_trust_title')}
          />
        </Grid>
      </div>
    )
  }
}

export default translate('about')(AboutValues);
