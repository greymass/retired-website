import React, { Component } from 'react';

import { translate } from 'react-i18next';
import { Segment, Transition } from 'semantic-ui-react';

import SupportUsButton from '../../../../shared/buttons/supportUs';

import supportUsStickerStyles from './sticker.module.css'

class Sticker extends Component {
  state = { visible: true };

  render() {
    const { t, visible } = this.props;

    return(
      <Transition visible={visible} animation='scale' duration={500}>
        <Segment className={supportUsStickerStyles.segment} basic>
          <h2 className={supportUsStickerStyles.title}>
            {t('sticky_banner_title')}
          </h2>
          <p className={supportUsStickerStyles.paragraph}>
            {t('sticky_banner_paragraph')}
          </p>
          <SupportUsButton />
        </Segment>
      </Transition>
    )
  }
}

export default translate('blog')(Sticker);
