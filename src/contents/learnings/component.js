import React, { Component, Fragment } from 'react';
import { arrayOf, object } from 'prop-types';

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

const titleText = 'Learnings';

class Learnings extends Component {
  constructor(props) {
    super(props);

    this.contents = this.contents.bind(this);
  }

  contents() {
    const { resources } = this.props;

    return resources.map((resource, idx) => {
      // TODO: to be refined.
      if (idx === 0 || idx === 1) return null;

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
          {resources[0] && (
            <Fragment>
              <div key={resources[0].id} className={imageArea}>
                <div className={imageFrame}>
                  <img className={image}
                    src={resources[0].imageSource.src}
                    alt={resources[0].imageSource.alt}
                  />
                </div>
              </div>
              <div className={textFrame}>
                <h4 className={title}>{titleText}</h4>
                <p className={paragraph}>{resources[1].text}</p>
              </div>
            </Fragment>
          )}
          {this.contents()}
        </div>
      </div>
    );
  }
}

Learnings.propTypes = {
  resources: arrayOf(object).isRequired,
};

export default Learnings;
