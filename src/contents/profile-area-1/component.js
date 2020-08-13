import React, { Component } from 'react';

import {
  profileArea,
  contentFrame,
  content,
  layerFrame,
  layer1,
  layer2,
  layer3,
  backText,
  imageFrame,
  foreText,
  fraction,
} from './component.css';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi tempus. Interdum consectetur libero id faucibus nisl tincidunt eget. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Tortor at auctor urna nunc. ';

class ProfileArea1 extends Component {
  render() {
    return (
      <div className={profileArea}>
        <div className={contentFrame}>
          <div className={content}>
            <div className={layerFrame}>
              <div className={layer1}>
                <span className={backText}>{text}</span>
              </div>
            </div>
            <div className={layerFrame}>
              <div className={layer2}>
                <div className={imageFrame}>
                  <img
                    width="400" height="600"
                    src="/images/image-1.2.png"
                    alt="Education Platform"
                  />
                  <div className={layer3}>
                    <span className={foreText}>{text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileArea1;
