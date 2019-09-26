import React, { Component } from "react"

import { Grid, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

import Img from 'gatsby-image';

import homeProjectCardStyles from './card.module.css';

export default class HomeProjectCard extends Component {
  render() {
    const {
      icon,
      imageAlt,
      imageFluid,
      linkTo,
      primary,
      text,
    } = this.props;

    return (
      <Grid.Column width={primary ? 4 : 3}>
        <Link to={linkTo}>
          {imageFluid && (
            <div style={{ position: 'relative' }}>
              <div className={
                `${homeProjectCardStyles.iconContainer} ${
                  primary ? homeProjectCardStyles.primaryIconContainer : ''
                }`
              }>
                <Icon name={icon} style={{ margin: '5px', marginTop: '10px' }} />
              </div>
              <Img
                alt={imageAlt}
                fluid={imageFluid}
                style={{ height: '200px' }}
              />
            </div>
          )}

          <div
            className={
              `${homeProjectCardStyles.bottomContainer} ${
                primary ? homeProjectCardStyles.primaryBottomContainer : ''
              }`
            }
          >
            <h4 className={homeProjectCardStyles.text}>
              {text}
            </h4>
          </div>
        </Link>
      </Grid.Column>
    )
  }
}
