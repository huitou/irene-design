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

class Introduction extends Component {
  render() {
    const { titleText, paragraphs, imageSource } = this.props;

    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <h3 className={title}>{titleText}</h3>
          <div className={textFrame}>
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

Introduction.propTypes = {
  titleText: string.isRequired,
  paragraphs: arrayOf(string).isRequired,
  imageSource: object,
};

export default Introduction;
