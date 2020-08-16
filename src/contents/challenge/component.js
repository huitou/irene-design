import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';

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

const titleText = 'Design Challenges';

class Challenge extends Component {
  render() {
    const { paragraphs } = this.props;

    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <div className={textFrame}>
            <h4 className={title}>{titleText}</h4>
            {paragraphs[0] && <p className={paragraph}>{paragraphs[0]}</p>}
            {paragraphs[1] && <p className={paragraph}>{paragraphs[1]}</p>}
            {paragraphs[2] && <p className={paragraph}>{paragraphs[2]}</p>}
          </div>
          <div className={imageArea}>
            <div className={imageFrame}>
              <img className={image}
                src="/images/image-1.2.png"
                alt="Education Platform"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Challenge.propTypes = {
  paragraphs: arrayOf(string).isRequired,
};

export default Challenge;
