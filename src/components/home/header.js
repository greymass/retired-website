import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { Link } from 'gatsby';

import greymassHeaderBackground from '../../images/greymassHeaderBackground.svg';

class HomeHeader extends Component {
  render() {
    const { t } = this.props;

    const backgroundStyles = {
      display: 'block',
      margin: 'auto',
      maxWidth: '800px',
    };
    const headerTextStyles = {
      fontFamily: 'Montserrat',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      margin: 'auto',
      paddingTop: '50px',
      paddingBottom: '60px',
      maxWidth: '600px',
      textAlign: 'center',
      textTransform: 'uppercase',
    };
    const subheaderTextStyles = {
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.02em',
      lineHeight: '30px',
      textAlign: 'center',
      margin: '0',
    };
    const supportUsLinkStyle = {
      color: '#0091E2',
      textTransform: 'uppercase',
      fontSize: '16px',
      marginLeft: '5px',
    };

    return (
      <Container style={{ paddingBottom: '50px' }} basic>
        <h4 style={headerTextStyles}>
         {t('header_one')}
        </h4>
        <img
          alt='greymass-header'
          style={backgroundStyles}
          src={greymassHeaderBackground}
        />
        <h4 style={headerTextStyles}>
          {t('header_two')}
        </h4>

        <div style={{ marginTop: '40px' }}>
          <h5 style={subheaderTextStyles}>
            {t('header_bottom_one')}
          </h5>
          <h5 style={subheaderTextStyles}>
            {t('header_bottom_two')}

            <Link style={supportUsLinkStyle} to={`#support-us`}>
              {t('header_bottom_link')}
            </Link>
          </h5>
        </div>
      </Container>
    )
  }
}

export default translate('home')(HomeHeader);
