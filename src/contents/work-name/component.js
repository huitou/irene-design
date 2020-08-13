import React, { Component } from 'react';

import {
  workNameArea,
  workNameFrame,
  workName,
  companyNameFrame,
  companyName,
} from './component.css';


class WorkName extends Component {
  render() {
    return (
      <div className={workNameArea}>
        <div className={workNameFrame}>
          <div className={workName}>
            <span>KidsClub Redesign</span>
          </div>
        </div>
        <div className={companyNameFrame}>
          <div className={companyName}>
            <span>Dose Juice</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkName;
