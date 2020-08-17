import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import {
  headerArea,
  logoFrame,
  name,
  logo,
  menuFrame,
  menu,
  menuItem,
  menuItemLeft,
  menuItemRight,
  inactive,
  dark,
} from './component.css';

class Header extends Component {
  render() {
    const { theme, activePage } = this.props;

    const isThemeDark = theme === 'DARK';
    const isHomePage = activePage === 'WORK';

    return (
      <div className={headerArea}>
        <div className={logoFrame}>
          <Link to="/">
            <img
              className={logo}
              src={`/images/logo${isHomePage ? '' : '-white'}.png`}
              alt="Irene Lidia Wang"
            />
          </Link>
        </div>
        <div className={menuFrame}>
          <div className={menu}>
            <Link style={{ textDecoration: 'none' }} to="/">
              <span className={`${menuItem} ${menuItemLeft} ${isHomePage ? inactive : ''} ${isThemeDark ? dark : ''}`}>Work</span>
            </Link>
            <span className={`${menuItem} ${menuItemRight} ${isThemeDark ? dark : ''}`}
              onClick={() => window.open('/docs/cv.pdf', '_blank')}
            >
              CV
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  theme: string,
  activePage: string,
};

Header.defaultProps = {
  theme: 'LIGHT',
  activePage: 'WORK',
};

export default Header;
