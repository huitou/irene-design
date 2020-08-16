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

class Introduction extends Component {
  render() {
    const { titleText, paragraphs } = this.props;

    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <h3 className={title}>{titleText}</h3>
          <div className={textFrame}>
            <p className={paragraph}>{paragraphs[0]}</p>
            <p className={paragraph}>{paragraphs[1]}</p>
            <p className={paragraph}>{paragraphs[2]}</p>
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

Introduction.propTypes = {
  titleText: string.isRequired,
  paragraphs: arrayOf(string).isRequired,
};

export default Introduction;
