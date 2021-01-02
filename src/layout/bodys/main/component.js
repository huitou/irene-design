import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';

import { area1, area2, area3 } from './component.css';

class MainBodyLayout extends Component {
  render() {
    const { area1Render, area2Render, area3Render } = this.props;

    return (
      <div>
        <div className={area1}>{area1Render()}</div>
        <div className={area2}>{area2Render()}</div>
        <div className={area3}>{area3Render()}</div>
      </div>
    );
  }
}

MainBodyLayout.propTypes = {
  area1Render: func,
  area2Render: func,
  area3Render: func,
};

MainBodyLayout.defaultProps = {
  area1Render: () => (<div>area1 placeholder</div>),
  area2Render: () => (<div>area2 placeholder</div>),
  area3Render: () => (<div>area2 placeholder</div>),
};

export default MainBodyLayout;
