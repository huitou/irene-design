import React, { Component } from 'react';
import { func } from 'prop-types';

import { area, frame, box, left, right } from './component.css';

class ContactBodyLayout extends Component {

  render() {
    const { mailRender, phoneRender, socialRender } = this.props;

    return (
      <div className={area}>
        <div className={frame}>
          <div className={box}>
            <div className={left}>
              {mailRender()}
              {phoneRender()}
            </div>
            <div className={right}>
              {socialRender()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContactBodyLayout.propTypes = {
  mailRender: func,
  phoneRender: func,
  socialRender: func,
};

ContactBodyLayout.defaultProps = {
  mailRender: () => (<div>area placeholder</div>),
  phoneRender: () => (<div>area placeholder</div>),
  socialRender: () => (<div>area placeholder</div>),
};

export default ContactBodyLayout;
