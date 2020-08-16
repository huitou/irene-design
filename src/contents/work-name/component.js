import React, { Component } from 'react';
import { string } from 'prop-types';

import {
  workNameArea,
  workNameFrame,
  workName,
  companyNameFrame,
  companyName,
} from './component.css';

class WorkName extends Component {
  render() {
    const { work, company } = this.props;

    return (
      <div className={workNameArea}>
        <div className={workNameFrame}>
          <div className={workName}>
            <span>{work}</span>
          </div>
        </div>
        <div className={companyNameFrame}>
          <div className={companyName}>
            <span>{company}</span>
          </div>
        </div>
      </div>
    );
  }
}

WorkName.propTypes = {
  work: string.isRequired,
  company: string.isRequired,
};

export default WorkName;
