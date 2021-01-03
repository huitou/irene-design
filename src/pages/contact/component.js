import React, { Component } from 'react';

import PageLayout from '../../layout/page';
import ContactBodyLayout from '../../layout/bodys/contact';
import Header from '../../contents/header';

import { contactTitle, contactText, contactLink } from './component.css';

const bodyRender = () => (
  <ContactBodyLayout
    mailRender={() => (
      <div>
        <div className={contactTitle}><span>MAIL</span></div>
        <a className={contactLink} href="mailto:irenelidiawang@gmail.com" target="_blank">
          <div className={contactText}><span>irenelidiawang@gmail.com</span></div>
        </a>
      </div>
    )}
    phoneRender={() => (
      <div>
        <div className={contactTitle}><span>PHONE</span></div>
        <div className={contactText}><span>+34593759375</span></div>
      </div>
    )}
    socialRender={() => (
      <div>
        <div className={contactTitle}><span>SOCIAL</span></div>
        <div>
          <a className={contactLink} href="https://www.linkedin.com/in/irene-lidia-wang/" target="_blank">
            <div className={contactText}><span>Linkedin</span></div>
          </a>
          <a className={contactLink} href="https://www.linkedin.com/in/irene-lidia-wang/" target="_blank">
            <div className={contactText}><span>Youtube</span></div>
          </a>
          <a className={contactLink} href="https://www.linkedin.com/in/irene-lidia-wang/" target="_blank">
            <div className={contactText}><span>Instagram</span></div>
          </a>
        </div>
      </div>
    )}
  />
);

class ContactPage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#ecd5c9';
  }

  render() {
    return (
      <PageLayout
        activePage="CONTACT"
        headerRender={() => (<Header theme="LIGHT" activePage="CONTACT" />)}
        bodyRender={bodyRender}
        footerRender={() => {}}
      />
    );
  }
}

export default ContactPage;
