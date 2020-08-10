import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

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
  constructor(props) {
    super(props);
    this.state = {
      isImage1Visible: false,
      isImage2Visible: false,
    };

    this.onVisibility1Change = this.onVisibility1Change.bind(this);
    this.onVisibility2Change = this.onVisibility2Change.bind(this);
  }

  onVisibility1Change(isVisible) {
    isVisible && setTimeout(
      () => this.setState(({ isImage1Visible }) => !isImage1Visible ? { isImage1Visible: true } : {}),
      2000
    );
  }
  onVisibility2Change(isVisible) {
    isVisible && setTimeout(
      () => this.setState(({ isImage2Visible }) => !isImage2Visible ? { isImage2Visible: true } : {}),
      2500
    );
  }

  render() {
    const { isImage1Visible, isImage2Visible} = this.state;

    return (
      <div className={imagesArea}>
        <div className={imageArea1}>
          <VisibilitySensor onChange={this.onVisibility1Change}>
            <div className={imageFrame1}>
              {isImage1Visible && <img
                className={image1}
                src="/images/image-2.1.png"
                alt="Music Stream Platform"
              />
              }
            </div>
          </VisibilitySensor>
        </div>
        <div className={imageArea2}>
          <VisibilitySensor onChange={this.onVisibility2Change}>
            <div className={imageFrame2}>
              {isImage2Visible && <img
                className={image2}
                src="/images/image-2.2.png"
                alt="eCommerce Website"
              />
              }
            </div>
          </VisibilitySensor>
        </div>
      </div>
    );
  }
}

export default Images2;
