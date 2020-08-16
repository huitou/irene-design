import React, { Component } from 'react';
import { string } from 'prop-types';

import {
  workTypeArea,
  workTypeFrame,
  workType,
} from './component.css';

class WorkType extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className={workTypeArea}>
        <div className={workTypeFrame}>
          <div className={workType}>
            <span>{type}</span>
          </div>
        </div>
      </div>
    );
  }
}

WorkType.propTypes = {
  type: string.isRequired,
};

export default WorkType;
