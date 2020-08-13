import React, { Component } from 'react';

import {
  introductionArea,
  introductionFrame,
  textFrame,
  title,
  paragraph,
  imageFrame,
  image,
} from './component.css';

const titleText = 'Design Challenges';
const paragraph1 = 'Creating a visual style that would appeal to young and older people was the first major UI hurdle since we needed to cater to both children (average age 6 to 14) and their parents as the app target audience.';
const paragraph2 = "The second major UI experience was finding a set of illustrations to represent each event category like sport, fine art or cooking. The illustration would too have to work for both kids and adults. No budget was allocated to illustrations, so we needed to find a free illustration library. ";
const paragraph3 = undefined;

class Challenge extends Component {
  render() {
    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <div className={textFrame}>
            <p className={title}>{titleText}</p>
            <p className={paragraph}>{paragraph1}</p>
            <p className={paragraph}>{paragraph2}</p>
            {paragraph3 && <p className={paragraph}>{paragraph3}</p>}
          </div>
          <div className={imageFrame}>
            <img className={image}
              src="/images/image-1.2.png"
              alt="Education Platform"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;
