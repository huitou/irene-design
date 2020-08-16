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
} from './component.css';


class Header extends Component {
  render() {
    const { activePage } = this.props;
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
              src="/images/logo.png"
              alt="Irene Lidia Wang"
            />
          </div>
        </div>
        <div className={menuFrame}>
          <div className={menu}>
            <span className={`${menuItem} ${isHomePage ? inactive : ''}`}
              onClick={() => {
                if(!isHomePage) {
                  window.location = '/';
                }
              }}
            >
              Work
            </span>
            <span className={menuItem}
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
  activePage: string,
};

Header.defaultProps = {
  activePage: 'WORK',
};

export default Header;
