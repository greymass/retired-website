import React, { Component } from 'react';


import { Segment, Transition } from 'semantic-ui-react';

import SupportUsButton from '../../../../shared/buttons/supportUs';

import supportUsStickerStyles from './sticker.module.css'

class Sticker extends Component {
  state = { visible: true };

  render() {
    const { visible } = this.props;

    return(
      <Transition visible={visible} animation='scale' duration={300}>
        <Segment className={supportUsStickerStyles.segment} basic>
          <h2 className={supportUsStickerStyles.title}>
            {'sticky_banner_title'}
          </h2>
          <p className={supportUsStickerStyles.paragraph}>
            {'sticky_banner_paragraph'}
          </p>
          <SupportUsButton />
        </Segment>
      </Transition>
    )
  }
}

export default Sticker;
