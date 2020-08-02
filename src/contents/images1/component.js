import React, { Component } from 'react';

import {
  imagesArea,
  imageArea1,
  imageArea2,
  imageFrame1,
  imageFrame2,
  image1,
  image2,
} from './component.css';

class Images1 extends Component {
  render() {
    return (
      <div className={imagesArea}>
        <div className={imageArea1}>
          <div className={imageFrame1}>
            <img
              className={image1}
              src="/images/image-1.1.png"
              alt="Food Sharing App - Leftlovers"
            />
          </div>
        </div>
        <div className={imageArea2}>
        <div className={imageFrame2}>
            <img
              className={image2}
              src="/images/image-1.2.png"
              alt="Education Platform"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Images1;
