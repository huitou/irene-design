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
            <img
              className={icon}
              src="/images/icons8-linkedin-100.png"
              alt="LinkedIn"
            />
            <img
              className={icon}
              src="/images/icons8-instagram-100.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
