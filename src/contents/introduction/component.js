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

const titleText = 'A reimagining of a mobile app designed to encourage children to get active.';
const paragraph1 = 'OKidsClub is a mobile app by juice brand OJuice that connects children with events, activities and competitions, so that they can get more active and combat sedentary behaviour.';
const paragraph2 = "We set out to redesign an experience that would reinvigorate the OJuice brand and reinforce the company's position as undisputed leader in the juice market.";
const paragraph3 = 'We started by reviewing user reasearch, speaking to customers and drawing insights from customer interviews. The decision-making process, moving from consideration to purchase, was then translated into the website user experience.';

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

export default Introduction;
