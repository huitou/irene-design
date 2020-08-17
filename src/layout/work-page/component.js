import React, { Component } from 'react';
import { func } from 'prop-types';

import { view, page, topArea, bodyArea, bottomArea } from './component.css';

class WorkPageLayout extends Component {

  render() {
    const { topRender, bodyRender, bottomRender } = this.props;

    return (
      <div className={view}>
        <div className={page}>
          <div className={topArea}>{topRender()}</div>
          <div className={bodyArea}>{bodyRender()}</div>
          <div className={bottomArea}>{bottomRender()}</div>
        </div>
      </div>
    );
  }
}

WorkPageLayout.propTypes = {
  topRender: func,
  bodyRender: func,
  bottomRender: func,
};

WorkPageLayout.defaultProps = {
  topRender: () => (<div>Top area placeholder</div>),
  bodyRender: () => (<div>Body area placeholder</div>),
  bottomRender: () => (<div></div>),
};

export default WorkPageLayout;
