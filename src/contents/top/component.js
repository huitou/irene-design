import React, { Component } from 'react';
import { string, object } from 'prop-types';

import Header from '../header';
import WorkName from '../work-name'
import WorkType from '../work-type'

import {
  topContentArea,
  topContentFrame,
} from './component.css';

class TopContent extends Component {
  render() {
    const { imageSource, work, company, type } = this.props;
    const backgroundStyle = {
      backgroundImage: `url(${imageSource.src})`,
      backgroundSize: '100% 100%',
    };

    return (
      <div className={topContentArea} style={imageSource.src ? backgroundStyle : {}}>
        <div className={topContentFrame}>
          <Header activePage="WORK_ITEM_1"
            theme="DARK"
          />
          <WorkName work={work} company={company} />
          <WorkType type={type} />
        </div>
      </div>
    );
  }
}

TopContent.propTypes = {
  imageSource: object,
  work: string.isRequired,
  company: string.isRequired,
  type: string.isRequired,
};

TopContent.defaultProps = {
  imageSource: {},
};

export default TopContent;
