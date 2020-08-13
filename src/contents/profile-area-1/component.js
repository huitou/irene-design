import React, { Component } from 'react';

import {
  profileArea,
  contentFrame,
  content,
  layer,
} from './component.css';


class ProfileArea1 extends Component {
  render() {
    return (
      <div className={profileArea}>
        <div className={contentFrame}>
          <div className={content}>
            <div className={layer}>Layer 1</div>
            <div className={layer}>Layer 2</div>
            <div className={layer}>Layer 3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileArea1;
