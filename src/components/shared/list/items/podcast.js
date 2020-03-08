import React from 'react';

import { Icon } from 'semantic-ui-react';

import podcastStyles from './podcast.module.css'

const Podcast = ({ title, date, link }) => {
  return (
    <a href={link}>
      <div className={podcastStyles.container}>
        <h3 className={podcastStyles.header}>
          {title}
        </h3>
        <h4 className={podcastStyles.date}>
          <Icon name="calendar alternate outline" />
          {new Date(date).toLocaleDateString()}
        </h4>
      </div>
    </a>
  );
}

export default Podcast;
