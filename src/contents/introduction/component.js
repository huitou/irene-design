import React, { Component, Fragment } from 'react';
import { oneOfType, string, arrayOf, object } from 'prop-types';

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
  constructor(props) {
    super(props);

    this.contents = this.contents.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  contents() {
    const { resources } = this.props;

    return resources.map(resource => {
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

  getTitle() {
    const { titleText } = this.props;

    return typeof(titleText) === 'string'
      ? titleText
      : titleText.map((part, idx) => <Fragment key={idx}>{part}<br/></Fragment>);
  }

  render() {
    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <h3 className={title}>{this.getTitle()}</h3>
          {this.contents()}
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  titleText: oneOfType([
    string,
    arrayOf(string)
  ]).isRequired,
  resources: arrayOf(object).isRequired,
};

export default Introduction;
