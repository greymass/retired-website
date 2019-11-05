import React from 'react';
import Slider from 'react-slick';
import { Icon, Container } from 'semantic-ui-react';

import { injectIntl } from 'gatsby-plugin-intl';

import ProjectListCard from '../shared/cards/project';

import projectListStyles from './projectList.module.css';

class ProjectList extends React.Component {
  render() {
    const {
      images,
      intl,
      platform,
      primary,
      projects,
    } = this.props;

    const platformProjects =
      projects.filter(project => project.platform === platform);

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow:
        primary ? 2 : (platformProjects.length > 3 ? 4 : platformProjects.length),
      speed: 500,
      prevArrow: <LeftArrow />,
      nextArrow: <RightArrow />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            initialSlide: 1
          }
        },
      ]
    };

    return (
      <div className={`${projectListStyles.container} ${projectListStyles.projectList}`} >
        <Container>
          <h3 className={projectListStyles.secondaryHeader}>
            {intl.formatMessage({ id: `platform_${platform}` })}
          </h3>

          <Slider
            className={primary ?
            projectListStyles.primaryCarousel :
              projectListStyles.secondaryCarousel
            }
            {...settings}
          >
            {platformProjects.map(project => (
              <ProjectListCard
                images={images}
                extraClassName={primary ?
                  'primaryContainer' :
                  'secondaryContainer'
                }
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
      `${className} ${projectListStyles.arrow} ${projectListStyles.arrowLeft}`
    }
  >
    <Icon name="arrow left" className={projectListStyles.arrowIcon} />
  </div>
);

const RightArrow = ({className, onClick}) => (
  <div
    onClick={onClick}
    className={
      `${className} ${projectListStyles.arrow} ${projectListStyles.arrowRight}`
    }
  >
    <Icon name="arrow right" className={projectListStyles.arrowIcon} />
  </div>
);

export default injectIntl(ProjectList);
