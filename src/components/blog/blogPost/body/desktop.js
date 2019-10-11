import React, { Component } from 'react';

import {
  Grid,
  Rail,
  Ref,
  Sticky,
  Visibility
} from 'semantic-ui-react';
import { translate } from 'react-i18next';

import SupportUsSticker from './desktop/sticker';

class BlogPostBodyDesktopn extends Component {
  state = { stickerVisible: false };

  handleUpdate = (e, { calculations }) => {
    const updateShouldBeIgnored =
      calculations.percentagePassed === 0 ||
      isNaN(calculations.percentagePassed);

    if (updateShouldBeIgnored) {
      return;
    }

    this.setState({
      stickerVisible: calculations.percentagePassed > 0.2 &&
                        calculations.percentagePassed < 0.95
    });
  }

  render() {
    const { post } = this.props;
    const { stickerVisible } = this.state;

    return (
      <Grid>
        <Grid.Column width={3}>
          <Ref innerRef={this.contextRef}>
            <Rail>
              <Sticky context={this.contextRef} pushing>
                <SupportUsSticker visible={stickerVisible} />
              </Sticky>
            </Rail>
          </Ref>
        </Grid.Column>
        <Grid.Column width={10}>
          <Visibility onUpdate={this.handleUpdate}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Visibility>
        </Grid.Column>
      </Grid>
    )
  }
}

export default translate('blog')(BlogPostBodyDesktopn);

