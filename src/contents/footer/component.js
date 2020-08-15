import React, { Component } from 'react';

import {
  footerArea,
  contactFrame,
  contact,
  contactItem,
  socialFrame,
  social,
  icon,
} from './component.css';


class Footer extends Component {
  render() {
    return (
      <div className={footerArea}>
        <div className={contactFrame}>
          <div className={contact}>
            <div className={contactItem}>Irene Lidia Wang</div>
            <div className={contactItem}>irenelidiawang@gmail.com</div>
            <div className={contactItem}>+44 07923565761</div>
          </div>
        </div>
        <div className={socialFrame}>
          <div className={social}>
            <a href="https://www.linkedin.com/in/irene-lidia-wang/" target="_blank">
              <img
                className={icon}
                src="/images/linkedin-black.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.instagram.com/irenelwang/" target="_blank">
              <img
                className={icon}
                src="/images/instagram-black.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
