import React from 'react';
import Slider from 'react-slick';
import ProjectListCard from './projectList/card';
import { translate } from 'react-i18next';
import { Icon } from 'semantic-ui-react';

import projectListStyles from './projectList.module.css';

class ProjectList extends React.Component {
  render() {
    const {
      images,
      primary,
      projects,
    } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: primary ? 2 : 5,
      speed: 500,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };

    return (
      <Slider {...settings}>
        {projects.map(project => (
          <ProjectListCard
            images={images}
            primary={primary}
            project={project}
          />
        ))}
      </Slider>
    );
  }
}

const PrevArrow = ({onClick}) => (
  <div className={projectListStyles.arrow} onClick={onClick}>
    <Icon className={projectListStyles.arrowIcon} name="arrow left" />
  </div>
);

const NextArrow = ({onClick}) => (
  <div className={projectListStyles.arrow} onClick={onClick}>
    <Icon className={projectListStyles.arrowIcon} name="arrow right" />
  </div>
);

export default translate('about')(ProjectList);
