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

const titleText = 'A luxury digital destination for the fashion retail platform’s most loyal customers to discover the world’s most sought-after high jewelry and clothes.';
const paragraph1 = 'I collaborated with Kids Club for 3 weeks, where I sought to improve their mobile app’s visual UI style. Their app is in beta. It gives parents and their children personalised reccomendations of events, activities and competitions based on their interests, so that children can utilise their talents and build self-confidence.';
const paragraph2 = "My initial design audit saw many opportunities for UI improvement throughout the entire app. However, due to time constraints, I narrowed the scope of this project to focus on key screens. I also conducted usability tests of the redesign to see if my changes actually improved the user experience.";
const paragraph3 = undefined;

class Introduction extends Component {
  render() {
    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <h3 className={title}>{titleText}</h3>
          <div className={textFrame}>
            <p className={paragraph}>{paragraph1}</p>
            <p className={paragraph}>{paragraph2}</p>
            <p className={paragraph}>{paragraph3}</p>
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

export default Introduction;
