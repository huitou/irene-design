import React, { Component } from 'react';

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
const paragraph1 = 'To solve our UI challenges, we created a colourful interface that would appeal to kids but that still reads as clean and sophisticated for their parents. We chose a bright yellow as primary colour since yellow is most associated with happiness and optimism, as well as creativity. Rounded shapes were also chosen for a sofert and more approachable feel.';
const paragraph2 = 'Pablo style illustrations with their joyful yet cool and sophisticated look felt like a natural fit to class up the app. The wide range of Pablo illustrations also allowed us to easily pick an illustration for most event categories and achieve visual consistency.';
const paragraph3 = undefined;

class Solution extends Component {
  render() {
    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <div className={textFrame}>
            <h4 className={title}>{titleText}</h4>
            <p className={paragraph}>{paragraph1}</p>
            <p className={paragraph}>{paragraph2}</p>
            {paragraph3 && <p className={paragraph}>{paragraph3}</p>}
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

export default Solution;
