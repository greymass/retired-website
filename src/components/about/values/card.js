import React, { Component } from "react"

import {
  Container,
  Grid,
  Icon,
  Popup,
} from 'semantic-ui-react';

import aboutValuesCardStyles from './card.module.css';

export default class AboutValuesCard extends Component {
  state = { expanded: false };

  render() {
    const {
      iconName,
      description,
      title,
    } = this.props;

    return (
      <Grid.Column mobile={16} tablet={10} computer={5}>
        <div className={aboutValuesCardStyles.mainIconContainer}>
          <Icon
            name={iconName}
            className={aboutValuesCardStyles.mainIcon}
          />
        </div>
        <h2 className={aboutValuesCardStyles.title}>
          {title}
          <Popup
            trigger={<Icon className={aboutValuesCardStyles.popupIcon} name="info circle" />}
            className={
              `${
                aboutValuesCardStyles.popup
              } ${
                aboutValuesCardStyles.popupVisible
              } ${
                aboutValuesCardStyles.popupUI
              }`}
            position= "top center"
          >
            <Container className={aboutValuesCardStyles.popupContainer} basic>
              <h2 className={aboutValuesCardStyles.popupTitle}>
                {title}
              </h2>
              <p className={aboutValuesCardStyles.popupDescription}>
                {description}
              </p>
            </Container>
          </Popup>
        </h2>
      </Grid.Column>
    )
  }
}
