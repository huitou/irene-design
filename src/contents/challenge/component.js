import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';

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
  constructor(props) {
    super(props);

    this.contents = this.contents.bind(this);
  }

  contents() {
    const { resources } = this.props;

    return resources.map((resource, idx) => {
      // TODO: to be refined.
      if (idx === 0) return null;

      if (resource.type === 'PARAGRAPH') {
        return (
          <div key={resource.id} className={textFrame}>
            <p className={paragraph}>{resource.text}</p>
          </div>
        );
      }

      if (resource.type === 'IMAGE') {
        return (
          <div key={resource.id} className={imageArea}>
            <div className={imageFrame}>
              <img className={image}
                src={resource.imageSource.src}
                alt={resource.imageSource.alt}
              />
            </div>
          </div>
        );
      }

      if (resource.type === 'VIDEO') {
        return (
          <div key={resource.id} className={videoArea}>
            <div className={videoFrame}>
              <video className={video} controls>
                <source src={resource.videoSource.src} type={resource.videoSource.type} />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
        );
      }

      return null;
    });
  }
  
  render() {
    const { resources } = this.props;

    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <div className={textFrame}>
            <h4 className={title}>{titleText}</h4>
            <p className={paragraph}>{resources[0].text}</p>
          </div>
          {this.contents()}
        </div>
      </div>
    );
  }
}

Challenge.propTypes = {
  resources: arrayOf(object).isRequired,
};

export default Challenge;
