import React, { Component } from 'react';

import {
  workTypeArea,
  workTypeFrame,
  workType,
} from './component.css';


class WorkType extends Component {
  render() {
    return (
      <div className={workTypeArea}>
        <div className={workTypeFrame}>
          <div className={workType}>
            <span>Mobile App Redesign</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkType;
