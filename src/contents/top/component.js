import React, { Component } from 'react';

import Header from '../header';
import WorkName from '../work-name'
import WorkType from '../work-type'

import {
  topContentArea,
  topContentFrame,
  title,
  titleBold,
} from './component.css';


class TopContent extends Component {
  render() {
    return (
      <div className={topContentArea}>
        <div className={topContentFrame}>
          <Header />
          <WorkName />
          <WorkType />
        </div>
      </div>
    );
  }
}

export default TopContent;
