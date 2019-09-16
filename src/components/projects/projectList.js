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
      platform,
      primary,
      projects,
      t,
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
      <div className={projectListStyles.container} >
        {primary ? (
          <h2 className={projectListStyles.primaryHeader}>{t('project_list_primary_header')}</h2>
        ) : (
          <h3 className={projectListStyles.secondaryHeader}>{t(`projects_platform_${platform}`)}</h3>
        )}

        <Slider
          className={primary ?
            projectListStyles.primaryCarousel :
            projectListStyles.secondaryCarousel
          }
          {...settings}
        >
          {projects.filter(project => project.platform === platform).map(project => (
            <div>
              <ProjectListCard
                images={images}
                primary={primary}
                project={project}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const PrevArrow = ({onClick}) => (
  <div className={`${projectListStyles.arrow} ${projectListStyles.arrowLeft}`} onClick={onClick}>
    <Icon className={projectListStyles.arrowIcon} name="arrow left" />
  </div>
);

const NextArrow = ({onClick}) => (
  <div className={`${projectListStyles.arrow} ${projectListStyles.arrowRight}`} onClick={onClick}>
    <Icon className={projectListStyles.arrowIcon} name="arrow right" />
  </div>
);

export default translate('projects')(ProjectList);
