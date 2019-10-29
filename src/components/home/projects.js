import React, { Component } from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import {
  Card,
  Container,
  Icon,
  Grid,
  // Responsive
} from 'semantic-ui-react';

import { Link } from 'gatsby';
import HomeProjectsCards from './projects/cards';

import projectsBackgroundForDesktop from '../../images/projectsBackgroundForDesktop.svg';
// import projectsBackgroundForMobile from '../../images/projectsBackgroundForMobile.svg';

import homeProjectsStyles from './projects.module.css';

class HomeProjects extends Component {
  render() {
    const { intl } = this.props;
    // TODO: Responsive logic needs reworking
    // <Responsive {...Responsive.onlyMobile}>
    //   <img
    //     alt='projects-page-background-mobile'
    //     src={projectsBackgroundForMobile}
    //     className={homeProjectsStyles.image}
    //   />
    // </Responsive>
    // <Responsive minWidth={Responsive.onlyTablet.minWidth}>
    //   <img
    //     alt='projects-page-background-desktop'
    //     src={projectsBackgroundForDesktop}
    //     className={homeProjectsStyles.image}
    //   />
    // </Responsive>
    return (
      <React.Fragment>
        <div className={homeProjectsStyles.arrowDownContainer}>
          <Icon name="arrow down" className={homeProjectsStyles.arrowDownIcon} />
          <img
            alt='projects-page-background-desktop'
            src={projectsBackgroundForDesktop}
            className={homeProjectsStyles.image}
          />
        </div>
        <div className={homeProjectsStyles.container}>
          <p className={homeProjectsStyles.headerText}>
            {intl.formatMessage({ id: 'home_projects_title' })}
          </p>
          <HomeProjectsCards
            cards={4}
          />
          <div className={homeProjectsStyles.portfolioContainer}>
            <Link className={homeProjectsStyles.supportUsLink} to={`/projects`}>
              {intl.formatMessage({ id: 'home_projects_portfolio_link' })}
              <Icon name="arrow right" style={{ marginLeft: '5px'}} />
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default injectIntl(HomeProjects);
