import React, { Component } from 'react';
import { string } from 'prop-types';

import Header from '../header';
import WorkName from '../work-name'
import WorkType from '../work-type'

import {
  topContentArea,
  topContentFrame,
} from './component.css';

class TopContent extends Component {
  render() {
    const { work, company } = this.props;

    return (
      <div className={topContentArea}>
        <div className={topContentFrame}>
          <Header activePage="WORK_ITEM_1"
            theme="DARK"
          />
          <WorkName work={work} company={company} />
          <WorkType />
        </div>
      </div>
    );
  }
}

TopContent.propTypes = {
  work: string.isRequired,
  company: string.isRequired,
};

export default TopContent;
