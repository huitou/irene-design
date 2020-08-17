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
  constructor(props) {
    super(props);

    this.contents = this.contents.bind(this);
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
    });
  }

  render() {
    const { titleText } = this.props;

    return (
      <div className={introductionArea}>
        <div className={introductionFrame}>
          <h3 className={title}>{titleText}</h3>
          {this.contents()}
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  titleText: string.isRequired,
  resources: arrayOf(object).isRequired,
};

export default Introduction;
