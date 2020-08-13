import React, { Component } from 'react';

import {
  workTypeArea,
  workTypeFrame,
  workName,
  companyNameFrame,
  companyName,
} from './component.css';


class WorkType extends Component {
  render() {
    return (
      <div className={workTypeArea}>
        <div className={workTypeFrame}>
          <div className={companyName}>
            <span>Mobile App Redesign</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkType;
