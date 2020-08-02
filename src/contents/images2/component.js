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

class Images2 extends Component {
  render() {
    return (
      <div className={imagesArea}>
        <div className={imageArea1}>
          <div className={imageFrame1}>
            <img
              className={image1}
              src="/images/image-2.1.png"
              alt="Music Stream Platform"
            />
          </div>
        </div>
        <div className={imageArea2}>
        <div className={imageFrame2}>
            <img
              className={image2}
              src="/images/image-2.2.png"
              alt="eCommerce Website"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Images2;
