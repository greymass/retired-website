import React, { Component } from 'react';

import { Grid, Icon } from 'semantic-ui-react';

import socialMediaButtonStyles from './socialMediaButton.module.css';

export default class SocialMediaButton extends Component {
  state = { active: false };

  render() {
    const { name, link } = this.props;
    const { active } = this.state;

    return link ? (
      <Grid.Column width={3} >
        <a
          className={`${socialMediaButtonStyles.container} ${
            active ? socialMediaButtonStyles.activeContainer : ''
          }`}
          href={link}
          onMouseEnter={() => this.setState({ active: true})}
          onMouseLeave={() => this.setState({ active: false})}
        >
          <Icon name={name} />
        </a>
      </Grid.Column>
    ) : '';
  }
}
