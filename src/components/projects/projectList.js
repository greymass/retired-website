import React from 'react';
import Slider from 'react-slick';
import ProjectListCard from './projectList/card';
import { translate } from 'react-i18next';
import { Icon, Container } from 'semantic-ui-react';

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
      slidesToShow: primary ? 2 : 4,
      speed: 500,
      prevArrow: <LeftArrow />,
      nextArrow: <RightArrow />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },

      ]
    };

    return (
      <div className={projectListStyles.container} >
        <Container>
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
              <ProjectListCard
                images={images}
                primary={primary}
                project={project}
              />
            ))}
          </Slider>
        </Container>

      </div>
    );
  }
}

const LeftArrow = ({className, onClick}) => (
  <div
    onClick={onClick}
    className={
      `${className} ${projectListStyles.arrow} ${
        projectListStyles.arrow
      } ${projectListStyles.arrowLeft}`
    }
  >
    <Icon  name="arrow left" className={projectListStyles.arrowIcon} />
  </div>
);

const RightArrow = ({className, onClick}) => (
  <div
    onClick={onClick}
    className={
      `${className} ${projectListStyles.arrow} ${
        projectListStyles.arrow
        } ${projectListStyles.arrowRight}`
    }
  >
    <Icon name="arrow right" className={projectListStyles.arrowIcon} />
  </div>
);

export default translate('projects')(ProjectList);
