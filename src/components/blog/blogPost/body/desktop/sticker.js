import React, { Component } from 'react';

import { injectIntl } from "gatsby-plugin-intl";

import { Segment, Transition } from 'semantic-ui-react';

import SupportUsButton from '../../../../shared/buttons/supportUs';

import supportUsStickerStyles from './sticker.module.css'

class Sticker extends Component {
  state = { visible: true };

  render() {
    const { intl, visible } = this.props;

    return(
      <Transition visible={visible} animation='scale' duration={300}>
        <Segment
          className={
            `${
              supportUsStickerStyles.sticker} ${supportUsStickerStyles.banner
            } ${
              supportUsStickerStyles.segment
            }`
          }
          basic
        >
          <h2 className={supportUsStickerStyles.title}>
            {intl.formatMessage({ id: 'blog_sticky_banner_title' })}
          </h2>
          <p className={supportUsStickerStyles.paragraph}>
            {intl.formatMessage({ id: 'blog_sticky_banner_paragraph'})}
          </p>
          <SupportUsButton />
        </Segment>
      </Transition>
    )
  }
}

export default injectIntl(Sticker);
