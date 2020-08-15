import React, { Component } from 'react';

import {
  headerArea,
  nameFrame,
  name,
  logo,
  linksFrame,
  links,
  link,
} from './component.css';


class Header extends Component {
  render() {
    return (
      <div className={headerArea}>
        <div className={nameFrame}>
          <div className={name}>
            <img
              className={logo}
              src="/images/logo.png"
              alt="Irene Lidia Wang"
            />
          </div>
        </div>
        <div className={linksFrame}>
          <div className={links}>
            <a className={link} href="/">Work</a>
            <a className={link} href="/">About</a>
            <a className={link} href="/">CV</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
