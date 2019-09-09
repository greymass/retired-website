import React, { Component } from "react"

import { Container, Icon, Grid } from "semantic-ui-react"
import { translate } from 'react-i18next';
import { Link } from 'gatsby';

import HomeBlogPostsCard from './blogPosts/card';

class HomeBlogPosts extends Component {
  render() {
    const { t } = this.props;

    const containerStyles = {
      backgroundColor: 'white',
      textAlign: 'center',
      width: '100%',
      borderBottom: '2px solid #0091E2',
    };

    const headerTextStyles = {
      color: '#424954',
      fontFamily: 'Montserrat',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      padding: '40px',
    };

    const supportUsLinkStyles = {
      color: '#0091E2',
      fonSize: '21px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      lineHeight: '25px',
      textTransform: 'uppercase',
    };
    return (
      <Container style={containerStyles} basic>
        <h4 style={headerTextStyles}>
          {t('blog_posts_title')}
        </h4>

        <Grid stackable centered padded>
          <HomeBlogPostsCard
            linkTo={`blog_posts_primary`}
            primary
            text={t('blog_posts_primary')}
          />
          <HomeBlogPostsCard
            linkTo={`blog_posts_one`}
            text={t('blog_posts_one')}
          />
          <HomeBlogPostsCard
            linkTo={`blog_posts_two`}
            text={t('blog_posts_two')}
          />
          <HomeBlogPostsCard
            linkTo={`blog_posts_three`}
            text={t('blog_posts_three')}
          />
        </Grid>
        <div style={{ padding: '60px', paddingBottom: '70px' }}>
          <Link style={supportUsLinkStyles} to={`projects`}>
            {t('blog_posts_link')}
            <Icon name="arrow right" style={{ marginLeft: '5px'}} />
          </Link>
        </div>
      </Container>
    )
  }
}

export default translate('home')(HomeBlogPosts);
