import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl";
import { Card, Header, Grid, Icon, Image } from 'semantic-ui-react';

import Img from 'gatsby-image';

import styles from './card.module.css';

class HomeProjectCard extends Component {
  render() {
    const {
      image,
      intl,
      project,
    } = this.props;

    const {
      projectKey
    } = project;

    const linkTo = project.link || project.githubLink;

    return (
      <Card
        as="a"
        href={linkTo}
        className={styles.card}
      >
        {(image)
          ? (
            <Image src={image} wrapped ui={false} />
          )
          : false
        }
        <Card.Content>
          <Card.Header>
            {intl.formatMessage({
              id: `project_${project.projectKey}_name`,
              defaultMessage: '[Project Name]',
              description: 'The name of the project'
            })}
          </Card.Header>
          <Card.Meta>
            {intl.formatMessage({
              id: `project_${project.projectKey}_date`,
              defaultMessage: '[Launch Date]',
              description: 'The date the project launched'
            })}
          </Card.Meta>
          <Card.Description>
            {intl.formatMessage({
              id: `project_${project.projectKey}_description`,
              defaultMessage: '[Project Description]',
              description: 'The date the project launched'
            })}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {intl.formatMessage({
              id: `project_${project.projectKey}_extra`,
              defaultMessage: '[Project Extras]',
              description: 'Extra details of the project'
          })}
        </Card.Content>
      </Card>
    );
  }
}

export default injectIntl(HomeProjectCard)
