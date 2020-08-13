import React, { Component } from 'react';

import {
  profileArea,
  contentFrame,
  content,
  textContent,
} from './component.css';

const text = 'Felis donec et odio pellentesque diam volutpat commodo. Sapien nec sagittis aliquam malesuada bibendum. Tempus iaculis urna id volutpat lacus laoreet non. Luctus accumsan tortor posuere ac ut. Elementum curabitur vitae nunc sed. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.'

class ProfileArea2 extends Component {
  render() {
    return (
      <div className={profileArea}>
        <div className={contentFrame}>
          <div className={content}>
            <div className={textContent}>
              <span>{text}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileArea2;
