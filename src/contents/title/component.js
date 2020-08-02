import React, { Component } from 'react';

import {
  titleArea,
  titleFrame,
  title,
  titleBold,
} from './component.css';


class Title extends Component {
  render() {
    return (
      <div className={titleArea}>
        <div className={titleFrame}>
          <p className={title}>
            <span>With a background in the arts, I design experiences that make people’s lives </span>
            <span className={titleBold}>simple</span>
            <span> yet </span> 
            <span className={titleBold}>delightful</span>
            <span>.</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Title;
