import React from 'react';
import Slider from 'react-slick';
import ProjectListCard from './projectList/card';
import { translate } from 'react-i18next';
import { graphql, StaticQuery } from 'gatsby';
import { Icon } from 'semantic-ui-react';

import projectListStyles from './projectList.module.css';

export default class ProjectList extends React.Component {
  render() {
    const {
      primary,
      projects,
    } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: primary ? 2 : 5,
      speed: 500,
      nextArrow: ({onClick}) => (
        <div className={projectListStyles.arrow} onClick={onClick}>
          <Icon className={projectListStyles.arrowIcon} name="arrow right" />
        </div>
      ),
      prevArrow: ({onClick}) => (
        <div className={projectListStyles.arrow} onClick={onClick}>
          <Icon className={projectListStyles.arrowIcon} name="arrow left" />
        </div>
      ),
    };

    return (
      <Slider {...settings}>
        {projects.map(project => (
          <ProjectListCard
            primary={primary}
            project={project}
          />
        ))}
      </Slider>
    );
  }
}

const ProjectListWrapper = translate('about')(ProjectList);

export default props => (
  <StaticQuery
    query={graphql`
       query {
          site {
            siteMetadata {
              teamMembers {
                description
                name
                title
                socialMedia {
                  facebookLink
                  githubLink
                  linkedinLink
                  twitterLink,
                  youtubeLink,
                }
              }
            }
          }
          images: allFile(filter: {relativeDirectory: {regex: "/projects/${props.category}"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
       }
    `}
    render={data => <ProjectListWrapper data={data} {...props} />}
  />
);

