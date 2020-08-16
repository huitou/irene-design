import React, { Component } from 'react';
import { string } from 'prop-types';

import {
  headerArea,
  logoFrame,
  name,
  logo,
  menuFrame,
  menu,
  menuItem,
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
          <div className={`${name} ${isHomePage ? inactive : ''}`}
            onClick={() => {
              if(!isHomePage) {
                window.location = '/';
              }
            }}
          >
            <img
              className={logo}
              src={`/images/logo${isHomePage ? '' : '-white'}.png`}
              alt="Irene Lidia Wang"
            />
          </div>
        </div>
        <div className={menuFrame}>
          <div className={menu}>
            <span className={`${menuItem} ${isHomePage ? inactive : ''} ${isThemeDark ? dark : ''}`}
              onClick={() => {
                if(!isHomePage) {
                  window.location = '/';
                }
              }}
            >
              Work
            </span>
            <span className={`${menuItem} ${isThemeDark ? dark : ''}`}
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
