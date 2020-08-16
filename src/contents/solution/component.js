import React, { Component } from 'react';
import { string, arrayOf, object } from 'prop-types';

import {
  introductionArea,
  introductionFrame,
  textFrame,
  title,
  paragraph,
  videoArea,
  videoFrame,
  video,
  imageArea,
  imageFrame,
  image,
} from './component.css';

const titleText = 'Design Solution';

class Solution extends Component {
  render() {
    const { paragraphs, videoSource, imageSource } = this.props;

    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <div className={textFrame}>
            <h4 className={title}>{titleText}</h4>
            {paragraphs[0] && <p className={paragraph}>{paragraphs[0]}</p>}
            {paragraphs[1] && <p className={paragraph}>{paragraphs[1]}</p>}
            {paragraphs[2] && <p className={paragraph}>{paragraphs[2]}</p>}
          </div>
          {videoSource &&
            <div className={videoArea}>
              <div className={videoFrame}>
                <video className={video} controls width="250">
                  <source src={videoSource.src} type={videoSource.type} />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </div>
          }
          {imageSource &&
            <div className={imageArea}>
              <div className={imageFrame}>
                <img className={image}
                  src={imageSource.src}
                  alt={imageSource.alt}
                />
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

Solution.propTypes = {
  paragraphs: arrayOf(string).isRequired,
  videoSource: object,
  imageSource: object,
};

export default Solution;
