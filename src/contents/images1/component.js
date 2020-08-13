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
  workPanel,
  type,
  name,
  description,
  link,
} from './component.css';

class Images1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImage1Visible: false,
      isImage2Visible: false,
      hoverOnImageFrame1: false,
      hoverOnImageFrame2: false,
    };

    this.onVisibility1Change = this.onVisibility1Change.bind(this);
    this.onVisibility2Change = this.onVisibility2Change.bind(this);
    this.onMouseEnterImageFrame1 = this.onMouseEnterImageFrame1.bind(this);
    this.onMouseEnterImageFrame2 = this.onMouseEnterImageFrame2.bind(this);
    this.onMouseLeaveImageFrame1 = this.onMouseLeaveImageFrame1.bind(this);
    this.onMouseLeaveImageFrame2 = this.onMouseLeaveImageFrame2.bind(this);
  }

  onVisibility1Change(isVisible) {
    isVisible && setTimeout(
      () => this.setState(({ isImage1Visible }) => !isImage1Visible ? { isImage1Visible: true } : {}),
      1000
    );
  }
  onVisibility2Change(isVisible) {
    isVisible && setTimeout(
      () => this.setState(({ isImage2Visible }) => !isImage2Visible ? { isImage2Visible: true } : {}),
      1500
    );
  }

  onMouseEnterImageFrame1() {
    this.setState({ hoverOnImageFrame1: true });
  }
  onMouseEnterImageFrame2() {
    this.setState({ hoverOnImageFrame2: true });
  }

  onMouseLeaveImageFrame1() {
    this.setState({ hoverOnImageFrame1: false });
  }
  onMouseLeaveImageFrame2() {
    this.setState({ hoverOnImageFrame2: false });
  }

  render() {
    const {
      isImage1Visible,
      isImage2Visible,
      hoverOnImageFrame1,
      hoverOnImageFrame2,
    } = this.state;

    return (
      <div className={imagesArea}>
        <div className={imageArea1}>
          <VisibilitySensor onChange={this.onVisibility1Change}>
            <div className={imageFrame1}
              onMouseEnter={this.onMouseEnterImageFrame1}
              onMouseLeave={this.onMouseLeaveImageFrame1}
            >
              <div className={image1}
                style={(!isImage1Visible || !hoverOnImageFrame1) ? { display: 'none' } : {}}
              >
                <div className={workPanel}>
                  <div className={type}>E-commerce website</div>
                  <div className={name}>House2Home</div>
                  <div className={description}>A unique website that empowers customers to shop products by mood.</div>
                  <a className={link} href="/">View the case study</a>
                </div>
              </div>
              <img className={image1}
                style={(!isImage1Visible || hoverOnImageFrame1) ? { display: 'none' } : {}}
                src="/images/image-1.1.png"
                alt="Food Sharing App - Leftlovers"
              />
            </div>
          </VisibilitySensor>
        </div>
        <div className={imageArea2}>
          <VisibilitySensor onChange={this.onVisibility2Change}>
            <div className={imageFrame2}
              onMouseEnter={this.onMouseEnterImageFrame2}
              onMouseLeave={this.onMouseLeaveImageFrame2}
            >
              <div className={image2}
                style={(!isImage2Visible || !hoverOnImageFrame2) ? { display: 'none' } : {}}
              >
                <div className={workPanel}>
                  <div className={type}>E-commerce website</div>
                  <div className={name}>House2Home</div>
                  <div className={description}>A unique website that empowers customers to shop products by mood.</div>
                  <a className={link} href="/">View the case study</a>
                </div>
              </div>
              <img className={image2}
                style={(!isImage2Visible || hoverOnImageFrame2) ? { display: 'none' } : {}}
                src="/images/image-1.2.png"
                alt="Education Platform"
              />
            </div>
          </VisibilitySensor>
        </div>
      </div>
    );
  }
}

export default Images1;
