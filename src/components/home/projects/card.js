import React, { Component } from "react"

import { Grid, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

import Img from 'gatsby-image';

import homeProjectCardStyles from './card.module.css';

export default class HomeProjectCard extends Component {
  state = {
    inverted: false,
  };

  render() {
    const {
      icon,
      imageAlt,
      imageFluid,
      linkTo,
      text,
    } = this.props;

    const { inverted } = this.state;

    return (
      <Grid.Column className={homeProjectCardStyles.container} width={inverted ? 6 : 3}>
        <a
          href={linkTo}
          onMouseEnter={() => this.setState({ inverted: true})}
          onMouseLeave={() => this.setState({ inverted: false})}
        >
          {imageFluid && (
            <div className={homeProjectCardStyles.imageContainer}>
              <div className={
                `${homeProjectCardStyles.iconContainer} ${
                  inverted ? homeProjectCardStyles.primaryIconContainer : ''
                }`
              }>
                <Icon name={icon} className={homeProjectCardStyles.icon} />
              </div>
              <Img
                alt={imageAlt}
                fluid={imageFluid}
                className={homeProjectCardStyles.image}
              />
            </div>
          )}

          <div
            className={
              `${homeProjectCardStyles.bottomContainer} ${
                inverted ? homeProjectCardStyles.primaryBottomContainer : ''
              }`
            }
          >
            <h4 className={homeProjectCardStyles.text}>
              {text}
            </h4>
          </div>
        </a>
      </Grid.Column>
    )
  }
}
