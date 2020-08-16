import React, { Component } from 'react';
import { string, arrayOf, object } from 'prop-types';

import {
  introductionArea,
  introductionFrame,
  textFrame,
  title,
  paragraph,
  imageArea,
  imageFrame,
  image,
} from './component.css';

const titleText = 'Design Solution';

class Solution extends Component {
  render() {
    const { paragraphs, imageSource } = this.props;

    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <div className={textFrame}>
            <h4 className={title}>{titleText}</h4>
            {paragraphs[0] && <p className={paragraph}>{paragraphs[0]}</p>}
            {paragraphs[1] && <p className={paragraph}>{paragraphs[1]}</p>}
            {paragraphs[2] && <p className={paragraph}>{paragraphs[2]}</p>}
          </div>
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
  imageSource: object,
};

export default Solution;
